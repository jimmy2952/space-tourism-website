import { NavLink } from "react-router-dom";
import "./Nav-rectangle.scss";

export const NavRectangle = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-item">
        <div className="nav-text number">00</div>
        <div className="nav-text">HOME</div>
      </NavLink>
      <NavLink to="/destination" className="nav-item">
        <div className="nav-text number">01</div>
        <div className="nav-text">DESTINATION</div>
      </NavLink>
      <NavLink to="/crew" className="nav-item">
        <div className="nav-text number">02</div>
        <div className="nav-text">CREW</div>
      </NavLink>
      <NavLink to="/technology" className="nav-item">
        <div className="nav-text number">03</div>
        <div className="nav-text">TECHNOLOGY</div>
      </NavLink>
    </nav>
  );
};
