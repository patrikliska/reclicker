import { Box } from '@mui/material';

import { islandGridSx } from './styles';

const islandImage = require('../../../../assets/island-w-water.png');

const Island = () => {
  const getBuilding = () => {
    const buildings = new Array(0);

    for (let i = 0; i < 200; i++) {
      buildings.push(i);
    }

    return buildings;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: 'auto',
      }}
    >
      <img src={islandImage} alt='island.png' style={{ width: '100%' }} />
      <Box sx={islandGridSx}>
        {getBuilding().map((item, index) => (
          <Box key={index} sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
        ))}
      </Box>
    </Box>
  );
};

export default Island;
