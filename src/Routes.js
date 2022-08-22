import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from './App';
import Index from './components/Index';
import NotFound from './components/404';
import Article from './components/Article';
import Articles from './components/Articles';

export default () => (
    <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Index />} />
            <Route path="articles">
                <Route index element={<Articles />} />
                <Route path=":article" element={<Article />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);
