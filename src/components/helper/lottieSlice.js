import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prevPageNo: 1,
  pageNo: 1,
  loop: false,
  speed: 1,
  play: true,
  direction: 1,
  segments: [1, 1],
};

const lottieSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    updateDirection: {
      reducer(state, action) {
        const { playDirection } = action.payload;
        state.direction = playDirection;
      },
    },
    updatePage: {
      reducer(state, action) {
        const { pageNo } = action.payload;
        state.pageNo = pageNo;
      },
    },
    updatePlaybackStart: {
      reducer(state, action) {
        const { startFrame } = action.payload;
        state.segments[0] = startFrame;
      },
    },
    updateRewindEnd: {
      reducer(state, action) {
        const { endFrame } = action.payload;
        state.segments[1] = endFrame;
      },
    },
  },
});

export const { updatePage, updatePlaybackStart, updateRewindEnd } =
  lottieSlice.actions;

export default lottieSlice.reducer;
