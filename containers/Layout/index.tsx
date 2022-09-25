import { ReactNode } from 'react';
import { Container, Main } from './styles';

interface LayoutProps {
  children?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
}

const Layout = ({ children, footer, header }: LayoutProps) => (
  <Container>
    {header}
    <Main>{children}</Main>
    {footer}
  </Container>
);

export default Layout;
