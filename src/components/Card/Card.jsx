import React from 'react';
import { CardStyle, CardTitle } from './style';
import './style.css';

function Card(props) {
    return(
        <CardStyle rounded={props.rounded}>
            <CardTitle>{props.titulo}</CardTitle>
            <p>{props.children}</p>
        </CardStyle>
    )
}

export { Card };