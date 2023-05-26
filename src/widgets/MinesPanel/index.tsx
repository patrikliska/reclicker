import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import ResourceWindow from '../../components/ResourceWindow';
import { MineIcon, TreeIcon } from '../../icons';

import './css.css';
import { Stones } from './components/Stones';
import { minesPanelContainerStyles } from './styles';

const MinesPanel = () => {
  const [counter, setCounter] = useState(0);
  const [counters, setCounters] = useState<JSX.Element[]>([]);

  const handleClick = () => {
    setCounter(counter + 1);

    const randomNumber = Math.random();

    setCounters((prevState) => [
      ...prevState,
      <div
        style={{ zIndex: 999, left: randomNumber * 50 }}
        className='counter-animation'
      >
        +1
      </div>,
    ]);
  };

  return (
    <div style={minesPanelContainerStyles()}>
      <ResourceWindow
        gridPosition='1 / 1 / 3 / 2'
        className='component-container'
      >
        <Button className='button' onClick={handleClick}>
          <TreeIcon
            sx={{
              '&:active': {
                transform: 'scale(0.75)',
                transition: '0.25s all',
              },
              height: 'auto',
              width: '100%',
            }}
          />
          {counters}
        </Button>
      </ResourceWindow>
      <ResourceWindow gridPosition='1 / 2 / 3 / 4'>
        <Stones />
      </ResourceWindow>
      <ResourceWindow gridPosition='3 / 1 / 5 / 4'>
        <MineIcon />
      </ResourceWindow>
      <ResourceWindow gridPosition='5 / 1 / 6 / 4'>
        Something nice
      </ResourceWindow>
    </div>
  );
};

export default MinesPanel;
