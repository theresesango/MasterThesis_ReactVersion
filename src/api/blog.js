import { Router } from 'express';
import {Connection, Request} from 'tedious';

var config = {
  server: 'localhost',
  userName: 'blog',
  password: 'blog1234blog!'
};

const connection = new Connection(config);
connection.on('connect', function(err) {
    if (err)
      console.error(err);
  }
);
const router = new Router();

router.get('/post/:slug', async (req, res, next) => {
  try {
    var blogPost = {};
    let slug = req.params.slug;
    let sql = `SELECT TOP 1
         [slug]
        ,[title]
        ,[post]
        ,[author]
        ,[date]
      FROM [BloggProject_DB].[dbo].[BloggPost]
      WHERE slug = '${slug}'`;
    let request = new Request(sql, function(err, rowCount) {
      if (err || rowCount != 1) {
        return res.status(404).send({error:'Blog post not found'});
      }
      res.status(200).send(blogPost);
    });

    request.on('row', (columns) => {
      for (let column of columns) {
        blogPost[column.metadata.colName] = column.value;
      }
    });
    connection.execSql(request);

  } catch (err) {
    next(err);
  }
});

router.get('/:offset*?', async (req, res, next) => {
  try {
    var result = [];
    let offset = req.params.offset ? parseInt(req.params.offset) : 0;
    let sql = `SELECT
             [slug]
            ,[title]
            ,[post]
            ,[author]
            ,[date]
          FROM [BloggProject_DB].[dbo].[BloggPost]
          ORDER BY date DESC
          OFFSET ${offset} ROWS
          FETCH NEXT 100 ROWS ONLY`;
    let request = new Request(sql, function(err, rowCount) {
      if (err) {
        return res.status(404).send({error:'Blog posts not found'});
      }
      res.status(200).send(result);
    });

    request.on('row', (columns) => {
      let blogPost = {};
      for (let column of columns) {
        blogPost[column.metadata.colName] = column.value;
        if(column.metadata.colName == "slug")
          blogPost["link"]="/post/" + column.value;
      }
      result.push(blogPost);
    });
    connection.execSql(request);

  } catch (err) {
    next(err);
  }
});


export default router;

