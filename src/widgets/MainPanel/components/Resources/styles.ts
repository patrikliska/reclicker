import { SxProps, Theme } from '@mui/material';

export const getResourcesContainerSx = (
  isCollapsed: boolean
): SxProps<Theme> => ({
  position: 'absolute',
  top: 0,
  alignItems: 'center',
  alignSelf: 'center',
  backgroundColor: '#ffffff',
  width: '70%',
  height: isCollapsed ? 30 : 250,
  boxShadow: 'rgb(40 44 52) 0px 0px 25px -10px',
  borderRadius: '0 0 5px 5px',
  transition: '1s all',
  boxSizing: 'border-box',
  padding: isCollapsed ? 0 : 3,
  overflow: 'hidden',
});

export const rowsContainerSx: SxProps<Theme> = {
  display: 'inline-flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: 0,
  margin: 1,
  opacity: '0.1',
  cursor: 'pointer',
  marginLeft: 'auto',
  marginRight: 'auto',
  transform: 'translateX(-50%)',
};

export const buttonRowSx: SxProps<Theme> = {
  width: 25,
  height: 2,
  backgroundColor: '#000000',
  margin: 0.2,
  borderRadius: 1,
};
