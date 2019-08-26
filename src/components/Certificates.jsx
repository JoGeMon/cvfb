import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificate = props => (
    <div className="Certificate">
        <H2Styled name="Certificates" />
        <div className="Certificate-container">
            {props.data.map((cert, index) => (
                <div className="Certificate-item" key={`Cert-${index}`}>
                    <H3Styled>{cert.name} @ {cert.institution} {cert.date}</H3Styled>
                    <PStyled name={cert.description}/>
                </div>
            ))}
        </div>
    </div>
);

export default Certificate; 