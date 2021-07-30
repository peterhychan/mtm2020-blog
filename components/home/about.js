import Link from "next/link";

const About = () => (
  <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-sm-start">
    <div className="container text-center">
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <h1>
          Hey there, I am <span className="text-primary">Peter Chan</span>.
        </h1>
        <Link href="/posts">
          <a className="btn btn-outline-primary btn-block btn-lg mt-4">
            All Posts
          </a>
        </Link>
        <p className="lead my-4 text-center">
          This is my journey on IBM&apos;s Master the Mainframe 2020.
        </p>
      </div>
    </div>
  </section>
);

export default About;
