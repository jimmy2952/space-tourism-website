import { Link } from 'react-router-dom';
import './Nav-circle.scss';

export const NavCircle = () => {
  return (
    <Link to="/">
      <div className='circle'></div>
    </Link>
  );
}
