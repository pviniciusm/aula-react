import React from 'react';
import styled from 'styled-components';
import { CardStyle } from '../Card/style';

const ClassCardStyle = styled(CardStyle)`
    background-color: #ffcf77;
`;

class ClassCard extends React.Component {
    render() {
        return (
            <ClassCardStyle>
                <h4>Titulo do card</h4>
                <p>Corpo do card</p>
            </ClassCardStyle>
        )
    }
}

export { ClassCard };
