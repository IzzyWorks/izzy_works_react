import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
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
    onHover: {
      reducer(state, action) {
        state = action.payload;
      },
      //   prepare(play, direction, lottieFrame) {
      //     return {
      //       payload: {
      //         play,
      //         direction,
      //         segments: lottieFrame,
      //       },
      //     };
      //   },
    },
    onMouseLeave: {
      reducer(state, action) {
        const { direction } = action.payload;
        const playBack = action.payload.direction;
      },
      prepare(playBack) {
        if (playBack) {
          direction = -1;
        }
      },
    },
    onScrollDown: {
      reducer(state, action) {
        const { play, direction, segments } = action.payload;
        const playBack = action.payload.direction;
      },
      prepare(playBack) {
        if (playBack) {
          play = true;
          direction = 1;
          playBack[1] = endFrame;
        }
      },
    },
    onScrollUp: {
      reducer(state, action) {
        const { play, direction, segments } = action.payload;
        const playBack = action.payload.direction;
      },
      prepare(playBack) {
        if (playBack) {
          play = true;
          direction = -1;
          playBack[0] = startFrame;
        }
      },
    },
    pageClickForward: {
      reducer(state, action) {
        const { play, direction, segments } = action.payload;
        const playBack = action.payload.direction;
      },
      prepare(playBack) {
        if (playBack) {
          play = true;
          direction = 1;
          playBack[0] = startFrame;
          playBack[1] = endFrame;
        }
      },
    },
    pageClickBackward: {
      reducer(state, action) {
        const { play, direction, segments } = action.payload;
        const playBack = action.payload.direction;
      },
      prepare(playBack) {
        if (playBack) {
          play = true;
          direction = -1;
          playBack[0] = startFrame;
          playBack[1] = endFrame;
        }
      },
    },
  },
});

export const {
  onHover,
  onMouseLeave,
  onScrollDown,
  onScrollUp,
  pageClickForward,
  pageClickBackward,
} = lottieSlice.actions;

export default lottieSlice.reducer;
