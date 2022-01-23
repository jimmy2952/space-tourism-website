import { useEffect, useState } from 'react';
import { PlanetFileNameEnum } from '@model/planet-enum';
import './Destination-planet.scss';

interface Props {
  planetName: string
}

export const DestinationPlanet = (props: Props) => {
  const [planet, setPlanet] = useState('MOON');
  useEffect(() => {
    console.log(props.planetName);
    setPlanet(props.planetName);
  }, [props.planetName])
  const planetMapping = new Map([
    ['MOON', PlanetFileNameEnum.MOON],
    ['MARS', PlanetFileNameEnum.MARS],
    ['EUROPA', PlanetFileNameEnum.EUROPA],
    ['TITAN', PlanetFileNameEnum.TITAN]
  ])
  return (
    <img src={`/destination/${planetMapping.get(planet)}.png`} alt="mars"></img>
  );
}