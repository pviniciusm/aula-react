import styled, { css } from 'styled-components';

export const CardStyle = styled.div`
  width: 200px;
  padding: 10px;
  margin: 10px;

  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};

  ${(props) => {
    if (props.rounded) {
      return css`
        border-radius: 12px;
      `;
    }

    return css`
      border-radius: 0;
    `;
  }}

  h4 {
    color: ${(props) => props.theme.primary};
  }

  /* :hover {
        background-color: #555;
    }  */
`;

export const CardTitle = styled.h4`
  font-size: 1.4rem;
`;
