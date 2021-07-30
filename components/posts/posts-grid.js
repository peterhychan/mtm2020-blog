import SinglePost from "./single-post";

const PostsGrid = ({ posts }) => (
  <div className="row text-center g-4">
    {posts.map((post) => (
      <SinglePost key={post.slug} post={post} />
    ))}
  </div>
);

export default PostsGrid;
