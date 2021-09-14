const navBarData = [
  {
    key: '0nav',
    name: 'Home',
    path: '/',
    page: 0,
    style: 'home-page',
    speed: 1,
    play: true,
    loop: false,
    frameForward: [0, 1],
    frameBackward: [11, 1],
    desktop: false,
    fontColor: 'black',
    whitePaper: false,
    Component: 'LandingPage',
    PageContent: null,
  },
  {
    key: '1nav',
    name: 'OBIC',
    path: '/obic',
    page: 1,
    style: 'obic-page',
    speed: 1,
    play: true,
    loop: false,
    firstFrame: 1,
    lastFrame: 11,
    desktop: false,
    fontColor: 'white',
    whitePaper: true,
    Component: 'OBICPage',
    PageContent: 'ContentData',
  },
  {
    key: '2nav',
    name: 'tldnr',
    path: '/tldnr',
    page: 2,
    style: 'tldnr-page',
    speed: 1,
    play: true,
    loop: false,
    firstFrame: 12,
    lastFrame: 22,
    desktop: false,
    fontColor: 'white',
    whitePaper: true,
    Component: 'TldnrPage',
    PageContent: 'ContentData',
  },
  {
    key: '3nav',
    name: 'HapMap',
    path: '/hapmap',
    page: 3,
    style: 'hapmap-page',
    speed: 1,
    play: true,
    loop: false,
    firstFrame: 23,
    lastFrame: 33,
    desktop: false,
    fontColor: 'white',
    whitePaper: true,
    Component: 'HapMapPage',
    PageContent: 'ContentData',
  },
  {
    key: '4nav',
    page: 4,
    name: 'About',
    path: '/about',
    style: 'about-page',
    speed: 1,
    play: true,
    loop: false,
    firstFrame: 33,
    lastFrame: 33,
    desktop: true,
    fontColor: 'black',
    whitePaper: false,
    Component: 'AboutPage',
    PageContent: null,
  },
];

export default navBarData;
