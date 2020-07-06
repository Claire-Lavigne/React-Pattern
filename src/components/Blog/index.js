// == Import : npm
import React from 'react';
import Article from 'src/components/Blog/Article';

// == Import : local
import Header from 'src/components/Header';
import './blog.scss';
import Footer from 'src/components/Footer';

const Blog = () => (
  <div id="blog">
    <Header />
    Hello
    <Article />
    <Footer />
  </div>
);

// == Export
export default Blog;
