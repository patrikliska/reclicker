import Screw from '../../../../components/Screw';
import { StyledMenuContainer, StyledMenuContainerContent } from './styles';

interface MenuContainerProps {
  children?: React.ReactNode;
  width: number;
}

const MenuContainer = ({ children, width }: MenuContainerProps) => (
  <div style={StyledMenuContainer(width)}>
    <Screw />
    <div style={StyledMenuContainerContent}>{children}</div>
    <Screw last />
  </div>
);

export default MenuContainer;
