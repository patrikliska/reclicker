import { CSSProperties } from 'react';

export const StyledMenuContainer = (width: number): CSSProperties => ({
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  height: '100%',
  width: `${width}%`,
});

export const StyledMenuContainerContent: CSSProperties = {
  alignItems: 'center',
  display: 'inline-flex',
  height: '100%',
  position: 'relative',
  width: '100%',
};
