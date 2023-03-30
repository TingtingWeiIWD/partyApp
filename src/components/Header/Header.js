import { Link } from "react-router-dom";

function Header({ goTo }) {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          to={goTo}
          style={{
            color: "#ffffff",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          <span>Back</span>
        </Link>
        <Link
          to="/"
          style={{
            color: "#ffffff",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          <span>Home</span>
        </Link>
      </header>
    </>
  );
}

export default Header;
