import React from 'react';
import styled from 'styled-components';

const TituloTexto = styled.h1`
    color: ${props => props.theme.color}
`

export function Titulo(props) {
    return (
        <>
            <TituloTexto>{props.valor}</TituloTexto>
            <h2>Teste</h2>
        </>
    )
}