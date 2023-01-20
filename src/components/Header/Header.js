import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <span style={{ color: "#ffffff", fontWeight:'bold'}}>  Back 返回 </span>
        </Link>
      </header>
    </>
  );
}

export default Header;
