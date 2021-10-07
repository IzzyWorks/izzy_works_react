const routesData = [
  {
    path: '/',
    name: 'Home',
    Component: LandingPage,
    PageContent: ContentData[0],
  },
  {
    path: '/obic',
    Component: OBICPage,
    PageContent: ContentData[1],
  },
  {
    path: '/tldnr',
    name: 'tldnr',
    Component: TldnrPage,
    PageContent: ContentData[2],
  },
  {
    path: '/hapmap',
    name: 'HapMap',
    Component: HapMapPage,
    PageContent: ContentData[3],
  },
  {
    path: '/about',
    name: 'About',
    Component: AboutPage,
    PageContent: ContentData[4],
  },
];

export default routesData;
