import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          marginBottom: 30,
        }}
      >
        <h1
          style={{
            margin: 0,
            padding: 0,
            textAlign: 'center'
          }}
        >
          WELCOME TO YOUR GIPHY
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "5px 5px",
          boxShadow: "-2px 2px 7px -1px rgba(0,0,0,0.2)",
          marginBottom: 100,
          borderRadius: 10,
        }}
      >
        <img
          src={Logo}
          alt="logo"
          style={{
            width: 60,
            height: 60,
          }}
        />
        <div>
          <h1
            style={{
              fontSize: 60,
              margin: 0,
              padding: 0,
            }}
          >
            GIPHY
          </h1>
        </div>
      </div>

      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Link to="/iron-man-giphy">IRON MAN GIPHY</Link>
      </div>

      <div>
        <Link to="/search-giphy">SEARCH YOUR GIPHY</Link>
      </div>
    </div>
  );
};

export default Home;
