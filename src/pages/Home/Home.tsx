import { HomeText } from './Home-text';
import { HomeCircle } from './Home-circle';
import './Home.scss';

export const HomePage = () => {

  return (
    <div className='home'>
      <HomeText />
      <HomeCircle />
    </div>
  );
}