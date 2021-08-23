import Header from './header';
import Main from './main';
import Nav from './nav';
import Ads from './ads';
import Footer from './footer';

export default (props: any) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      variant: 'layout.root',
    }}>
    <Header/>
    <div
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: ['column', 'row'],
      }}>
      <Main>{props.children}</Main>
      <Nav/>
      <Ads/>
    </div>
    <Footer/>
  </div>
);
