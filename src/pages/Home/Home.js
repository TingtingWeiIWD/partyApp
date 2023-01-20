import { Link } from "react-router-dom";
import banner from "./banner.png";
import firework1 from "./firework1.png";
import firework2 from "./firework2.png";
import firework3 from "./firework3.png";
import dateIcon from "./icon/date.svg";
import timeIcon from "./icon/time.svg";
function Home() {
  return (
    <>
      <img
        src={banner}
        alt="2023 Lunar New Year"
        style={{
          width: "100%",
          shadow: "gray 0 10px 20px -10px",
        }}
      ></img>
      <div className="homeContainer" style={{ position: "relative" }}>
        <img
          src={firework1}
          alt="firework1"
          style={{
            width: "15%",
            position: "absolute",
            top: "150px",
            left: "30px",
          }}
        ></img>
          <img
          src={firework2}
          alt="firework2"
          style={{
            width: "20%",
            position: "absolute",
            top: "230px",
            left: "30px",
          }}
        ></img>
          <img
          src={firework3}
          alt="firework3"
          style={{
            width: "13%",
            position: "absolute",
            top: "180px",
            left: "300px",
          }}
        ></img>
        <h1
          style={{
            marginTop: 25,
            marginBottom: 25,
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Lunar New Year Party at B&O's!
        </h1>

        <p
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 30,
          }}
        >
          Let's celebrate the year of Rabbit with a
          traditional Chinese New Year dinner and wrapping dumplings together!
        </p>
        <div
          style={{
            marginTop: 50,
            textAlign: "center",
          }}
        >
          <span>
            <img
              src={dateIcon}
              alt="date icon"
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
            Date
          </span>
        </div>

        <p
          style={{
            textAlign: "center",
          }}
        >
          Jan. 21st, 2023 (Saturday)
        </p>

        <div
          style={{
            marginTop: 30,
            textAlign: "center",
          }}
        >
          <span>
            <img
              src={timeIcon}
              alt="time icon"
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
            Time
          </span>
        </div>

        <p
          style={{
            textAlign: "center",
          }}
        >
          3:00 pm
        </p>
        <div
          style={{
            marginTop: 30,
            marginBottom: 30,
            textAlign: "center",
          }}
        >
          <span>
            <Link to="/Location">
              <button>Location Info</button>
            </Link>
          </span>
          <span>
            <Link to="/Arrived">
              <button>I've Arrived</button>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
