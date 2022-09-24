import { ReactNode } from 'react';
import Header from '../Header';
import { Container, Main } from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Header>Header</Header>
    <Main>{children}</Main>
  </Container>
);

export default Layout;
