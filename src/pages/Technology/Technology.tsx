import { useState } from 'react';
import { PageTitle } from '@shared/Page-title/Page-title';
import { technologyData } from '@data/technology-data';
import './Technology.scss';

export const TechnologyPage = () => {
  const [tech, setTech] = useState(0);
  const techData = technologyData[tech];
  const title: { number: string; text: string; } = {
    number: '03',
    text: 'SPACE LAUNCH 101'
  }
  function changeTechHandler(index: number) {
    setTech(index);
  }
  return (
    <div className='technology'>
      <PageTitle title={title} />
      <div className="left-container">
        <div className="circle-container">
          {technologyData.map((tech, index) => {
            return(
              <div key={index} className="circle-item" onClick={() => changeTechHandler(index)}><h4>{index + 1}</h4></div>
            );
          })}
        </div>
        <div className="text-container">
          <div className="nav-text">THE TERMINOLOGY ...</div>
          <h3>{techData.title}</h3>
          <div className="body-text">{techData.description}</div>
        </div>
      </div>
      <img src={`/technology/image-${techData.imageUrl}-portrait.jpg`} alt={techData.title} />
    </div>
  );
}