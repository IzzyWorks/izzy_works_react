import { configureStore } from '@reduxjs/toolkit';

import uiReducer from '../interface/uiSlice';
import lottieReducer from '../helper/lottieSlice';

export default configureStore({
  reducer: {
    ui: uiReducer,
    lottie: lottieReducer,
  },
});
