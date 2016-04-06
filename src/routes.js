/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import PostListPage from './components/PostListPage';
import PostPage from './components/PostPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/contact', async () => <ContactPage />);

  on('/about', async () => <AboutPage />);

  on('/', async () => {
    const blogPosts = await http.get(`/api/blog/`);
    return blogPosts && <PostListPage blogPosts={blogPosts}/>
  });

  on('/post/:slug', async (state, props) => {
    const blogPost = await http.get(`/api/blog/post/${state.params.slug}`);
    return blogPost && <PostPage {...blogPost} />;
  });

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    return content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
