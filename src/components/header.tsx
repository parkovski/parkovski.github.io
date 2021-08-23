import { useColorMode, Heading } from 'theme-ui';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faDove } from '@fortawesome/free-solid-svg-icons';

export default () => {
  const [colorMode, setColorMode] = useColorMode();
  const filter = colorMode === 'dark' ? 'grayscale(.85)' : 'none';
  return (
    <header sx={{variant: 'layout.header'}}>
      <Heading as="h1" sx={{variant: 'text.logo'}}>
        Parkovski
      </Heading>
      <div sx={{flexBasis: 'content'}}>
        <button
          onClick={_ => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
          sx={{
            variant: 'buttons.themeSwitcher',
          }}>
          <span sx={{filter}}>💡</span>
        </button>
      </div>
    </header>
  );
};
