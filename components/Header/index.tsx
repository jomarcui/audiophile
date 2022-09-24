import { ReactNode } from 'react';
import NavBar from './NavBar';
import { Container } from './styles';

interface HeaderProps {
  children?: ReactNode;
}

const Header = ({ children }: HeaderProps) => (
  <Container>
    <NavBar />
  </Container>
);

export default Header;
