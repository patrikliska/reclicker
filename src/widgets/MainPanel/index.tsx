import { Box } from '@mui/material';

import Island from './components/Island';

import Resources from './components/Resources';
import { containerSx, townIslandOverviewSx } from './styles';

const MainPanel = () => {
  return (
    <Box sx={containerSx}>
      <Resources />
      <Box sx={townIslandOverviewSx}>
        <Island />
      </Box>
    </Box>
  );
};

export default MainPanel;
