import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'homeId',
    name: 'Home',
    url: '/',
    pageNo: 1,
    textColor: 'white',
    page: '<LandingPage whitePaper={ContentData} />',
  },
  {
    id: 'obicId',
    name: 'OBIC',
    url: '/obic',
    pageNo: 2,
    textColor: 'white',
    page: '<LandingPage whitePaper={OBICPage} />',
  },
  {
    id: 'tldnrId',
    name: 'tldnr',
    url: '/tldnr',
    pageNo: 3,
    textColor: 'white',
    page: '<LandingPage whitePaper={TldnrPage} />',
  },
  {
    id: 'hapmapId',
    name: 'HapMap',
    url: '/hapmap',
    pageNo: 4,
    textColor: 'black',
    page: '<LandingPage whitePaper={HapMapPage} />',
  },
  {
    id: 'aboutId',
    name: 'About',
    url: '/about',
    pageNo: 5,
    textColor: 'black',
    page: '<LandingPage whitePaper={AboutPage} />',
  },
];

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
});

// export const { onMountPage } = lottieSlice.actions;

export default uiSlice.reducer;
