import { combineReducers } from '@reduxjs/toolkit';
import stockScreenerReducer from './stockScreener/StockScreenersSlice';

const rootReducer = combineReducers({
  stockScreeners: stockScreenerReducer,
});

export default rootReducer;
