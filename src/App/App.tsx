import { Box } from '@mui/material';

import Home from '../pages/Home';
import MainMenu from '../widgets/MainMenu';

import { appContainerSx } from './styles';

const App = () => (
  <Box className='App' sx={appContainerSx}>
    <MainMenu />
    <Home />
  </Box>
);

export default App;
