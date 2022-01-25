import { PageTitle } from '@shared/Page-title/Page-title';
import { useState } from 'react';
import { crewDataMapping } from '@data/crew-data';
import { CrewEnum } from '@model/crew-enum';
import './Crew.scss';

export const CrewPage = () => {
  const [crew, setCrew] = useState('COMMANDER');
  const crewData = crewDataMapping.get(crew);
  const crewArr: string[] = Object.values(CrewEnum);
  const title: { number: string; text: string; } = {
    number: '02',
    text: 'MEET YOUR CREW'
  }
  function changeCrewHandler(crew: string) {
    setCrew(crew);
  }
  return (
    <div className="crew">
      <PageTitle title={title}/>
      <div className="crew-textbox">
        <h4>{crewData?.job}</h4>
        <h3>{crewData?.name}</h3>
        <div className="body-text">{crewData?.description}</div>
      </div>
      <div className="crew-circle-container">
        {crewArr.map((c, index) => {
          return (
            <div key={index} className={`crew-circle ${crew === c ? 'crew-circle-active' : null}`} onClick={() => changeCrewHandler(c)}></div>
          );
        })}
      </div>
      <img className="crew-image" src={`/crew/${crewData?.imageUrl}.png`} alt={crewData?.name} />
    </div>
  );
}