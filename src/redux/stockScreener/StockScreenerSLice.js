import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchStockScreenerData = createAsyncThunk(
  'stockScreeners/fetchStockScreener',
  async () => {
    try {
      const response = await fetch('https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=75923f68a3b79acd5d5f2a07307c25b2');
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  },
);
