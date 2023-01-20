import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import locationIcon from "./icon/location.svg";
import parkingIcon from "./icon/parking.svg";

function Location() {
  return (
    <>
      <Header />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.3686446277966!2d-81.26774074928984!3d43.012627201530734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eee13ab48f159%3A0xbf96c45f924644a6!2s1235%20Richmond%20St%2C%20London%2C%20ON%20N6A%200C1!5e0!3m2!1sen!2sca!4v1673767901309!5m2!1sen!2sca"
          title="Luxe London"
          width="600"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        style={{
          marginTop: 30,
          textAlign: "center",
        }}
      >
        <span>
          <img
            src={locationIcon}
            alt="location icon"
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
          Location
        </span>
      </div>
      <p
        style={{
          textAlign: "center",
        }}
      >
        1235, Richmond St, N6A 0C1
        <br />
        Apt 811
      </p>
      <div
        style={{
          marginTop: 30,
          textAlign: "center",
        }}
      >
        <span>
          <img
            src={parkingIcon}
            alt="parking icon"
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
          Parking
        </span>
      </div>
      <div style={{textAlign:'center'}}>
        <div
          className="parkingOptions"
          style={{
            marginTop:'20px',
            marginBottom:'10px',
            marginRight:'auto',
            marginLeft:'auto',
            width: "80%",
            padding:'10px',
            backgroundColor: "white",
            borderRadius:'7px',
            borderStyle:'none',
            textAlign: "center",

          }}>
          Option 1: North side of building
        </div>
        <div style={{ textAlign: "center" }}>
          <span className="tag">Free</span>
          <span className="tag">Closest</span>
          <span className="tag">6 spots first come first serve</span>
        </div>
        <div
        className="parkingOptions"
        style={{
          marginTop:'20px',
          marginBottom:'10px',
          marginRight:'auto',
          marginLeft:'auto',
          width: "80%",
          padding:'10px',
          backgroundColor: "white",
          borderRadius:'7px',
          borderStyle:'none',
          textAlign: "center",
        }}>
          Option 2: Ross Park across the street
          </div>
        <div style={{ textAlign: "center" }}>
          <span className="tag">Free</span>
          <span className="tag">Available before 10 pm</span>
        </div>
        <div
        className="parkingOptions"
        style={{
          marginTop:'20px',
          marginBottom:'10px',
          marginRight:'auto',
          marginLeft:'auto',
          width: "80%",
          padding:'10px',
          backgroundColor: "white",
          borderRadius:'7px',
          borderStyle:'none',
          textAlign: "center",
        }}
        >
          <a
            href="https://www.londonparking.preciseparklink.com/1265-richmond-street"
            target="_blank"
            rel="noopener noreferrer"
          >
            Option 3: Nearby paid parking
          </a>
        </div>
        <div style={{ textAlign: "center" }}>
          <span className="tag">1265 Richmond St</span>
          <span className="tag">Parkedin Zone ID: 1045</span>
        </div>
        <div
          style={{
            marginTop: 30,
            marginBottom: 30,
            textAlign: "center",
          }}
        ></div>
        <span>
          <a
            href="https://goo.gl/maps/by3voUTMrZb74NGYA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Navigate</button>
          </a>
        </span>
        <span>
          <Link to="/Arrived">
            <button>I've Arrived</button>
          </Link>
        </span>
      </div>
    </>
  );
}

export default Location;
