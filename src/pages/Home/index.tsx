import { Box } from '@mui/material';

import MainPanel from '../../widgets/MainPanel';
import MinesPanel from '../../widgets/MinesPanel';

import { mainPanelContainerSx } from './styles';

const ControlSection = () => (
  <Box sx={mainPanelContainerSx}>
    <MinesPanel />
    <div
      style={{
        backgroundColor: '#e7e7e7',
        height: '100%',
        width: '60%',
        marginLeft: '10px',
        marginRight: '10px',
      }}
    >
      <MainPanel />
    </div>
    <div
      style={{
        backgroundColor: '#e7e7e7',
        height: '100%',
        width: '20%',
        borderBottomRightRadius: 10,
      }}
    >
      Upgrades
    </div>
  </Box>
);

export default ControlSection;
