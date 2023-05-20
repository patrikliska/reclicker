import { Box } from '@mui/material';
import { useState } from 'react';

import {
  buttonRowSx,
  rowsContainerSx,
  getResourcesContainerSx,
} from './styles';

const Resources = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Box sx={getResourcesContainerSx(isCollapsed)}>
      <Box
        sx={{
          display: 'grid',
          width: '100%',
          height: '100%',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: 2,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value, index) => (
          <Box
            key={index}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              fontSize: 22,
            }}
          >
            {(value + index + 555) * index * 9111}
          </Box>
        ))}
      </Box>
      <Box sx={rowsContainerSx} onClick={() => setIsCollapsed(!isCollapsed)}>
        {[0, 1, 2].map((_value, index) => (
          <Box key={index} sx={buttonRowSx} />
        ))}
      </Box>
    </Box>
  );
};

export default Resources;
