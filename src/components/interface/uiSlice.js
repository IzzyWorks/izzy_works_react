import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'homeId', name: 'Home', url: '/', pageNo: 1, textColor: 'white' },
  { id: 'obicId', name: 'OBIC', url: '/obic', pageNo: 2, textColor: 'white' },
  {
    id: 'tldnrId',
    name: 'tldnr',
    url: '/tldnr',
    pageNo: 3,
    textColor: 'white',
  },
  {
    id: 'hapmapId',
    name: 'HapMap',
    url: '/hapmap',
    pageNo: 4,
    textColor: 'black',
  },
  {
    id: 'aboutId',
    name: 'About',
    url: '/about',
    pageNo: 5,
    textColor: 'black',
  },
];

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
});

export const { onMountPage } = lottieSlice.actions;

export default uiSlice.reducer;
