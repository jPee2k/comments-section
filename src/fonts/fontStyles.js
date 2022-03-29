import { createGlobalStyle } from 'styled-components';
import RobotoWoff from './roboto-v29-latin-regular.woff';
import RobotoWoff2 from './roboto-v29-latin-regular.woff2';
import RobotoBoldWoff from './roboto-v29-latin-700.woff';
import RobotoBoldWoff2 from './roboto-v29-latin-700.woff2';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Condensed';
  src: url(${RobotoWoff2}) format('woff2'),
       url(${RobotoWoff}) format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url(${RobotoWoff2}) format('woff2'),
       url(${RobotoWoff}) format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(''),
       url(${RobotoBoldWoff2}) format('woff2'),
       url(${RobotoBoldWoff}) format('woff');
}
`;

export default FontStyles;
