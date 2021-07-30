import PostsGrid from "../posts/posts-grid";

const FeaturedPosts = ({ posts }) => (
  <section className="p-5">
    <div className="container">
      <h2 className="text-center">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </div>
  </section>
);

export default FeaturedPosts;
