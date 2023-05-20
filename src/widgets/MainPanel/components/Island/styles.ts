import { SxProps, Theme } from '@mui/material';

export const islandGridSx: SxProps<Theme> = {
  bgcolor: 'rgba(0, 0, 0, 0.17)',
  display: 'grid',
  gridTemplateColumns: 'repeat(20, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',
  height: '100%',
  position: 'absolute',
  top: 0,
  width: '100%',
  gap: 0.2,
};
