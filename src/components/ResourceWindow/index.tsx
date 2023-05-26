import { ReactNode } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

import {
  dotStyles,
  resourceWindowContainerStyles,
  topPanelStyles,
} from './styles';

const ResourceWindow = ({
  children,
  gridPosition,
  sx,
  className,
}: {
  children: ReactNode;
  gridPosition: string;
  sx?: SxProps<Theme>;
  className?: string;
}) => (
  <Box
    className={className}
    style={resourceWindowContainerStyles(gridPosition)}
    sx={sx}
  >
    <div style={topPanelStyles()}>
      <div style={dotStyles('red')} />
      <div style={dotStyles('yellow')} />
      <div style={dotStyles('green')} />
    </div>
    {children}
  </Box>
);

export default ResourceWindow;
