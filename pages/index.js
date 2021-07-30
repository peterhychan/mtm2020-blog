import Head from "next/head";

import FeaturedPosts from "../components/home/featured-posts";
import About from "../components/home/about";
import FreqAskQuestion from "../components/home/faq";
import { getFeaturedPosts } from "../utils/markdown-convert";

const HomePage = ({ posts }) => (
  <>
    <Head>
      <title>Peter&apos;s Blog on Master the Mainframe 2020</title>
      <meta
        name="description"
        content="My blog for Master the Mainframe 2020."
      />
    </Head>
    <About />
    <FeaturedPosts posts={posts} />
    <FreqAskQuestion />
  </>
);

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
