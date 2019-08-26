import React from 'react'
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Experience = props => (
    <div className="Experience">
        <H2Styled name="Experience" />
        <div className="Experience-container">
            {props.data.map((xp, index) => (
                <div className="Experience-item" key={`Experience-${index}`}>
                    <H3Styled>{xp.jobTitle} @ {xp.company} <span>{xp.startDate} - {xp.endDate} </span></H3Styled>
                    <PStyled name={xp.jobDescription}/>
            </div>
            ))}
        </div>
    </div>
);

export default Experience; 