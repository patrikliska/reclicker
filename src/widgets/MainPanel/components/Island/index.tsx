import { Box } from '@mui/material';

import { islandGridSx } from './styles';

const islandImage = require('../../../../assets/island-w-water.png');

const Island = () => (
  <Box>
    <img src={islandImage} alt="island.png" style={{ width: '100%' }} />
    <Box sx={islandGridSx} />
  </Box>
);

export default Island;