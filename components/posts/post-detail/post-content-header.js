import classes from "./post-content-header.module.scss";

const PostHeader = ({ title }) => (
  <header className={classes.header}>
    <h1 className="m-4">{title}</h1>
  </header>
);

export default PostHeader;
