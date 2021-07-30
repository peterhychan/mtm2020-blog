import PostsGrid from "./posts-grid";

const Posts = ({ posts }) => (
  <section>
    <h1>All Posts</h1>
    <PostsGrid posts={posts} />
  </section>
);

export default Posts;
