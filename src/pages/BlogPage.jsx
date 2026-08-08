import React, { useEffect } from 'react';
import BlogSection from '../components/BlogSection';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      <BlogSection />
    </main>
  );
};

export default BlogPage;
