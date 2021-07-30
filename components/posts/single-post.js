import Link from "next/link";
import Image from "next/image";

const SinglePost = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatExcerpt = text =>{
    return text.length > 50 ? text.substring(0,50)+'...' : text;
  }

  return (
    <div className="col-md">
      <div className="card bg-light text-dark">
        <div className="card-body text-center">
            <Image src={imagePath} alt={title} width={400} height={240} />
            <div className="d-grid gap-3 mx-auto m-3">
              <h3 className="card-title mb-3">{title}</h3>
              <time className="card-text">{formattedDate}</time>
              <p className="card-text">{formatExcerpt(excerpt)}</p>
              <Link href={linkPath}>
                <a className="btn btn-lg btn-outline-primary btn-block">
                  Read More
                </a>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
