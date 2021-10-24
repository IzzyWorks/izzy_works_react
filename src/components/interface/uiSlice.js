import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'homeId',
    name: 'Home',
    url: '/',
    pageNo: 1,
    textColor: 'white',
    page: 'LandingPage',
    firstFrame: 1,
    lastFrame: 1,
  },
  {
    id: 'obicId',
    name: 'OBIC',
    url: '/obic',
    pageNo: 2,
    textColor: 'white',
    page: 'OBICPage',
    firstFrame: 1,
    lastFrame: 11,
  },
  {
    id: 'tldnrId',
    name: 'tldnr',
    url: '/tldnr',
    pageNo: 3,
    textColor: 'white',
    page: 'TldnrPage',
    firstFrame: 12,
    lastFrame: 21,
  },
  {
    id: 'hapmapId',
    name: 'HapMap',
    url: '/hapmap',
    pageNo: 4,
    textColor: 'black',
    page: 'HapMapPage',
    firstFrame: 22,
    lastFrame: 33,
  },
  {
    id: 'aboutId',
    name: 'About',
    url: '/about',
    pageNo: 5,
    textColor: 'black',
    page: 'AboutPage',
    firstFrame: 33,
    lastFrame: 33,
  },
];

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
});

// export const { onMountPage } = lottieSlice.actions;

export default uiSlice.reducer;
