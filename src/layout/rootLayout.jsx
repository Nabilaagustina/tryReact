import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Link style={{ margin: 15 }} to="/">
        Home
      </Link>
      <Link style={{ margin: 15 }} to="/about">
        About
      </Link>
      <Link style={{ margin: 15 }} to="/blog">
        Blog
      </Link>
      <Outlet />
    </>
  );
};
export default RootLayout;
