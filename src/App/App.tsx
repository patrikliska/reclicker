import { Box } from '@mui/material';

import Home from '../pages/Home';
import MainMenu from '../widgets/MainMenu';

import { appContainerSx } from './styles';

export const App = () => (
  <Box sx={appContainerSx}>
    <MainMenu />
    <Home />
  </Box>
);
