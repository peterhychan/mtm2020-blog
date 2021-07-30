import Head from "next/head";

import Posts from "../../components/posts/posts";
import { getAllPosts } from "../../utils/markdown-convert";

const AllPostsPage = ({posts}) => (
  <>
    <Head>
      <title>All Posts</title>
      <meta
        name="description"
        content="The blog contents for Master the Mainframe 2020 from IBM."
      />
    </Head>
    <Posts posts={posts} />
  </>
);

export const getStaticProps = () => {
  const Posts = getAllPosts();

  return {
    props: {
      posts: Posts,
    },
  };
};

export default AllPostsPage;
