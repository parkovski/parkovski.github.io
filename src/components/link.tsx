import { Link as GatsbyLink } from 'gatsby';
import { LinkProps, Link as RebassLink } from '@rebass/emotion';

import { ITheme } from 'style/theme';

// A non-local link either starts with '//' or has a protocol (ex 'https:').
function isLocalLink(path: string): boolean {
  return !(path.startsWith('//') || /^[a-zA-Z0-9_-]+:/.test(path))
}

const style = (theme: ITheme) => ({
  color: theme.colors.blue[9],
  textDecoration: 'none',
  '&:hover': {
    color: theme.colors.blue[7],
    textDecoration: 'underline'
  }
});

export default (props: LinkProps) => {

  if (isLocalLink(props.href!)) {
    return <RebassLink {...props as any} to={props.href} as={GatsbyLink} css={style} />;
  } else {
    return <RebassLink {...props as any} css={style}/>;
  }
};