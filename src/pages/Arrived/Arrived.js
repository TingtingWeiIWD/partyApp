import Header from "../../components/Header/Header";
import callIcon from "./icon/call.svg";
import wifiIcon from "./icon/wifi.svg";
import { Link } from "react-router-dom";

function Arrived() {
  return (
    <>
      <Header goTo="/Location" />
      <div
        style={{
          marginTop: 30,
          textAlign: "center",
        }}
      >
        <span>
          <img
            src={callIcon}
            alt="call icon"
            style={{
              marginBottom: -7,
              marginRight: 5,
            }}
          />
        </span>
        <span
          className="h2"
          style={{
            fontSize: 17,
            color: "#78290f",
          }}
        >
          Call us
        </span>
      </div>

      <p
        style={{
          textAlign: "center",
          color: "#495057",
        }}
      >
        123-456-7890
      </p>

      <div
        style={{
          marginTop: 30,
          textAlign: "center",
        }}
      >
        <span>
          <img
            src={wifiIcon}
            alt="wifi icon"
            style={{
              marginBottom: -7,
              marginRight: 5,
            }}
          />
        </span>
        <span
          className="h2"
          style={{
            fontSize: 17,
            color: "#78290f",
          }}
        >
          WiFi
        </span>
      </div>

      <p
        style={{
          textAlign: "center",
          color: "#495057",
        }}
      >
        Name: WeLoveParty
        <br />
        Password: YesWeAllDo
      </p>
      <div
        style={{
          marginTop: 30,
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        <div>
          <a
            href="https://open.spotify.com/playlist/0gi12rByjBf4OoOAet1vem?si=TLQwBbHURC6AnEQSfH7E-A&pt=e74ee13bd0cc193d3d03a77ebd9935e0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="fullScreenBtn">Add Songs to Playlist</button>
          </a>
        </div>
        <div>
          <Link to="/Menu">
            <button className="fullScreenBtn">Dinner Menu</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Arrived;
