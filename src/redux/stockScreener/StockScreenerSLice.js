import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStockScreenerData = createAsyncThunk(
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

const stockScreenersSlice = createSlice({
  name: 'stockScreeners',
  initialState: {
    stockScreenerData: [],
    selectedCompany: [],
    searchStockCompany: [],
    loading: false,
    error: null,
  },
  reducers: {
    setStockScreenerData: (state, action) => {
      state.stockScreenerData = action.payload;
    },
    selectCompany: (state, action) => {
      state.selectedCompany = action.payload;
    },
    searchCompany: (state, action) => {
      const searchValue = action.payload.toLowerCase();
      state.searchStockCompany = state.stockScreenerData.filter(
        (screener) => screener.companyName.toLowerCase().includes(searchValue),
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockScreenerData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockScreenerData.fulfilled, (state, action) => {
        state.loading = false;
        state.stockScreenerData = action.payload;
        state.searchStockCompany = action.payload;
      })
      .addCase(fetchStockScreenerData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setStockScreenerData, selectCompany, searchCompany } = stockScreenersSlice.actions;
export default stockScreenersSlice.reducer;