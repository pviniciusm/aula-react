import { CardStyle, CardTitle } from './style';
import './style.css';

import { Button } from '@mui/material';
import Slider from '@mui/material/Slider';
import styled from '@mui/styled-engine';

const MyButton = styled(Button)(() => ({
  backgroundColor: 'orange',
}));

function Card(props) {
  return (
    <CardStyle rounded={props.rounded}>
      <CardTitle>{props.titulo}</CardTitle>
      <p>{props.children}</p>

      <MyButton
        sx={{
          fontSize: '40px',
        }}
        variant="outlined"
      >
        Clique aqui
      </MyButton>

      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </CardStyle>
  );
}

export { Card };
