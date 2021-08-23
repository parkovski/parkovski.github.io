import { Container } from 'theme-ui';

export default (props: any) => (
  <Container>
    <main sx={{variant: 'layout.main'}}>
      {props.children}
    </main>
  </Container>
);
