import { useState } from 'react';
import { PlanetEnum } from '@model/planet-enum';
import { planetDataMapping } from '@data/destination-planet';
import './Destination-textbox.scss';

interface Props {
  planetStateHandler: Function
}

export const DestinationTextbox = (props: Props) => {
  const [planet, setPlanet] = useState('MOON')
  const planetData = planetDataMapping.get(planet);
  const planetArr: string[] = [];
  for(const value in PlanetEnum) {
    planetArr.push(value);
  }
  function changePlanetHandler(planet: string) {
    setPlanet(planet);
    props.planetStateHandler(planet);
  }
  return (
    <div className='destination-textbox'>
      <div className='nav-container'>
        {planetArr.map((planet) => {
          return (<div className='nav-text' onClick={() => changePlanetHandler(planet)}>{planet}</div>);
        })}
      </div>
      <h2>{planetData?.title}</h2>
      <div className='body-text'>{planetData?.description}</div>
      <hr />
      <div className='text-footer'>
        <div className='subheading-container'>
          <div className='subheading2'>AVG. DISTANCE</div>
          <div className='subheading1'>{planetData?.averageDistance}</div>
        </div>
        <div className="subheading-container">
          <div className='subheading2'>EST. TRAVEL TIME</div>
          <div className='subheading1'>{planetData?.eta}</div>
        </div>
      </div>
    </div>
  );
}