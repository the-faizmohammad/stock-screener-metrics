import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchStockScreener = createAsyncThunk(
  'stockScreeners/fetchStockScreener',
  async () => {
    try {
      const response = await fetch('https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=a97307caefae90fd49ae8c8e45d6bbbf');
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  },
);
fetchStockScreener();

const StockScreenersSlice = createSlice({
  name: 'stockScreeners',
  initialState: {
    stockScreener: [],
    selectedCompany: [],
    searchStockCompany: [],
  },
  reducers: {
    setStockScreener: (state, action) => action.payload,
    selectCompany: (state, action) => {
      state.selectedCompany = action.payload;
    },

    searchCompany: (state, action) => {
      const searchValue = action.payload.toLowerCase();
      state.searchStockCompany = state.stockScreener.filter(
        (screener) => screener.companyName.toLowerCase().includes(searchValue),
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchStockScreener.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockScreener.fulfilled, (state, action) => {
        state.loading = false;
        state.stockScreener = action.payload;
        state.searchStockCompany = action.payload;
      })
      .addCase(fetchStockScreener.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectCompany, searchCompany } = StockScreenersSlice.actions;
export default StockScreenersSlice.reducer;
