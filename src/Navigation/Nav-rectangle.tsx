import { Link } from "react-router-dom";
import "./Nav-rectangle.scss";

export const NavRectangle = () => {
  return (
    <nav>
      <Link to="/">
        <div className="nav-item">
          <text className="nav-text number">00</text>
          <text className="nav-text">HOME</text>
        </div>
      </Link>
      <Link to="/destination">
        <div className="nav-item">
          <text className="nav-text number">01</text>
          <text className="nav-text">DESTINATION</text>
        </div>
      </Link>
      <Link to="/crew">
        <div className="nav-item">
          <text className="nav-text number">02</text>
          <text className="nav-text">CREW</text>
        </div>
      </Link>
      <Link to="/technology">
        <div className="nav-item">
          <text className="nav-text number">03</text>
          <text className="nav-text">TECHNOLOGY</text>
        </div>
      </Link>
    </nav>
  );
};
