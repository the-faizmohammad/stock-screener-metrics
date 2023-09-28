import { configureStore } from '@reduxjs/toolkit';
import stockScreenersReducer from './stockScreenersSlice';

const store = configureStore({
  reducer: {
    stockScreeners: stockScreenersReducer,
  },
});

export default store;
