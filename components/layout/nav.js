import Link from "next/link";

const Nav = () => (
  <header>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <div className="text-primary fw-bold">Peter&apos;s Blog on MtM 2020</div>
          </a>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/posts">
                <a className="nav-link text-primary fw-bold">Posts</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Nav;
