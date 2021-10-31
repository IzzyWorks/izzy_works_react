import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'homeId',
    lable: 'Home',
    url: '/',
    prevPageNo: 1,
    pageNo: 1,
    textColor: 'white',
    page: 'LandingPage',
    direction: 1,
    firstFrame: 1,
    lastFrame: 1,
    // lottieAnimation: {
    //   direction: 1,
    //   firstFrame: 1,
    //   lastFrame: 1,
    // },
  },
  {
    id: 'obicId',
    lable: 'OBIC',
    url: '/obic',
    prevPageNo: 1,
    pageNo: 2,
    textColor: 'white',
    page: 'OBICPage',
    direction: 1,
    firstFrame: 1,
    lastFrame: 11,
    // lottieAnimation: {
    //   direction: 1,
    //   firstFrame: 1,
    //   lastFrame: 11,
    // },
  },
  {
    id: 'tldnrId',
    lable: 'tldnr',
    url: '/tldnr',
    prevPageNo: 1,
    pageNo: 3,
    textColor: 'white',
    page: 'TldnrPage',
    direction: 1,
    firstFrame: 12,
    lastFrame: 21,
    // lottieAnimation: {
    //   direction: 1,
    //   firstFrame: 12,
    //   lastFrame: 21,
    // },
  },
  {
    id: 'hapmapId',
    lable: 'HapMap',
    url: '/hapmap',
    prevPageNo: 1,
    pageNo: 4,
    textColor: 'black',
    page: 'HapMapPage',
    direction: 1,
    firstFrame: 22,
    // lastFrame: 33,
    // lottieAnimation: {
    //   direction: 1,
    //   firstFrame: 22,
    //   lastFrame: 33,
    // },
  },
  {
    id: 'aboutId',
    lable: 'About',
    url: '/about',
    prevPageNo: 1,
    pageNo: 5,
    textColor: 'black',
    page: 'AboutPage',
    direction: 1,
    firstFrame: 22,
    lastFrame: 33,
    // lottieAnimation: {
    //   direction: 1,
    //   firstFrame: 22,
    //   lastFrame: 33,
    // },
  },
];

const lottieSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    updateLottieData: {
      reducer(state, action) {
        state = action.payload;
      },
      prepare(
        id,
        lable,
        url,
        prevPageNo,
        pageNo,
        textColor,
        page,
        newDirection,
        newFirstFrame,
        newLastFrame
      ) {
        return {
          payload: {
            id,
            lable,
            url,
            prevPageNo: prevPageNo,
            pageNo,
            textColor,
            page,
            direction: newDirection,
            firstFrame: newFirstFrame,
            lastFrame: newLastFrame,
            // lottieAnimation: {
            //   direction: newDirection,
            //   firstFrame: newFirstFrame,
            //   lastFrame: newLastFrame,
            // },
          },
        };
      },
    },
  },
});

export const {
  updateLottieData,
  updatePage,
  updatePlaybackStart,
  updateRewindEnd,
  mapButtons,
} = lottieSlice.actions;

export default lottieSlice.reducer;

// const initialState = {
//   prevPageNo: 1,
//   pageNo: 1,
//   loop: false,
//   speed: 1,
//   play: true,
//   direction: 1,
//   segments: [1, 1],
// };

// updateLottieData: {
//       reducer(state, action) {
//         state = action.payload;
//       },
//       prepare(
//         id,
//         lable,
//         url,
//         prevPageNo,
//         pageNo,
//         textColor,
//         page,
//         newDirection,
//         newFirstFrame,
//         newLastFrame
//       ) {
//         return {
//           payload: {
//             id,
//             lable,
//             url,
//             prevPageNo: prevPageNo,
//             pageNo,
//             textColor,
//             page,
//             direction: newDirection,
//             firstFrame: newFirstFrame,
//             lastFrame: newLastFrame,
//             // lottieAnimation: {
//             //   direction: newDirection,
//             //   firstFrame: newFirstFrame,
//             //   lastFrame: newLastFrame,
//             // },
//           },
//         };
//       },
//     },
