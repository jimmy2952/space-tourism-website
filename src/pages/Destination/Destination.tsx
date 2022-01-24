import { useState } from 'react';
import { PageTitle } from '@shared/Page-title/Page-title';
import { DestinationPlanet } from './Destination-planet';
import { DestinationTextbox } from './Destination-textbox';
import './Destination.scss';

export const DestinationPage = () => {
  const [planet, setPlanet] = useState('MOON');
  const title: { number: string; text: string; } = {
    number: '01',
    text: 'PICK YOUR DESTINATION'
  }
  function planetStateChange(textPlanet: string) {
    setPlanet(textPlanet);
  }
  return (
    <div className="destination">
      <PageTitle title={title} />
      <DestinationPlanet planetName={planet} />
      <DestinationTextbox planetName={planet} planetStateHandler={planetStateChange} />
    </div>
  );
}