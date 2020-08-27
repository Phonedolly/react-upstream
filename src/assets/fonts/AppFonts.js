import GilroyExtraBoldWoff2 from './Gilroy-ExtraBold.woff2';

import IBMPlexSansKRLightWoff2 from './IBMPlexSansKR-Light.woff2';
import IBMPlexSansKRRegularWoff2 from './IBMPlexSansKR-Regular.woff2';
import IBMPlexSansKRMediumWoff2 from './IBMPlexSansKR-Medium.woff2';
import IBMPlexSansKRSemiBoldWoff2 from './IBMPlexSansKR-SemiBold.woff2';
import IBMPlexSansKRBoldWoff2 from './IBMPlexSansKR-Bold.woff2';

import NanumSquareLightWoff2 from './NanumSquareL.woff2';
import NanumSquareRegularWoff2 from './NanumSquareR.woff2';
import NanumSquareBoldWoff2 from './NanumSquareB.woff2';
import NanumSquareExtraBoldWoff2 from './NanumSquareEB.woff2';

const gilroyExtraB = {
  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  fontDisplay: 'swap', // 지켜볼 필요가 있다
  fontWeight: '800',
  src: `url(${GilroyExtraBoldWoff2}) format('woff2')`,
};

/* IBMPlexSansKR */
const ibmPlexL = {
  fontFamily: 'IBMPlex',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '300',
  src: `url(${IBMPlexSansKRLightWoff2}) format('woff2')`,
};

const ibmPlexR = {
  fontFamily: 'IBMPlex',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `url(${IBMPlexSansKRRegularWoff2}) format('woff2')`,
};

const ibmPlexM = {
  fontFamily: 'IBMPlex',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '500',
  src: `url(${IBMPlexSansKRMediumWoff2}) format('woff2')`,
};

const ibmPlexSB = {
  fontFamily: 'IBMPlex',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '600',
  src: `url(${IBMPlexSansKRSemiBoldWoff2}) format('woff2')`,
};

const ibmPlexB = {
  fontFamily: 'IBMPlex',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '700',
  src: `url(${IBMPlexSansKRBoldWoff2}) format('woff2')`,
};

/* NanumSquare */
const nanumSquareL = {
  fontFamily: 'NanumSquare',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '300',
  src: `url(${NanumSquareLightWoff2}) format('woff2')`,
};

const nanumSquareR = {
  fontFamily: 'NanumSquare',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `url(${NanumSquareRegularWoff2}) format('woff2')`,
};

const nanumSquareB = {
  fontFamily: 'NanumSquare',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '700',
  src: `url(${NanumSquareBoldWoff2}) format('woff2')`,
};

const nanumSquareEB = {
  fontFamily: 'NanumSquare',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '800',
  src: `url(${NanumSquareExtraBoldWoff2}) format('woff2')`,
};
export const DefaultAppFontFamily =
  "'IBMPlex', 'NanumSquare', 'Gilroy', 'Roboto', 'Arial', 'sans-serif'";
export const HnAppFontFamily = "'Gilroy','NanumSquare', 'Roboto', 'Arial', 'sans-serif'";
export const AppFontFaces = [
  nanumSquareL,
  nanumSquareR,
  nanumSquareB,
  nanumSquareEB,
  ibmPlexL,
  ibmPlexR,
  ibmPlexM,
  ibmPlexSB,
  ibmPlexB,
  gilroyExtraB,
  'Roboto',
  'Arial',
  'sans-serif',
];
