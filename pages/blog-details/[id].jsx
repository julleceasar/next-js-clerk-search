import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BlogDetailsArea from '../../components/blog-details/blog-details-area';
import SEO from '../../components/seo';
import { blogs } from '../../data';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';

const BlogDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [blog, setBlog] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setBlog(blogs.find(item => item.id == id)))

    return () => {

    };
  }, [id]);

  return (
    <>
      <SEO pageTitle={'Blog Details'} />
      <Header white_bg={true} />
      <main>
        <BlogDetailsArea item={blog} />
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;