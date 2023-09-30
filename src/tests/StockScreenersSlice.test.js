import StockScreenersReducer, {
  searchCompany,
} from '../redux/stockScreener/StockScreenersSlice';

describe('StockScreenersSlice Reducer', () => {
  it('should filter stockScreener based on searchCompany action', () => {
    const initialState = {
      stockScreener: [
        { companyName: 'Stock A' },
        { companyName: 'Stock B' },
      ],
      searchStockCompany: [],
    };
    const newState = StockScreenersReducer(
      initialState,
      searchCompany('Stock A'),
    );
    expect(newState.searchStockCompany).toEqual([{ companyName: 'Stock A' }]);
  });

  it('should handle searchCompany with no match', () => {
    const initialState = {
      stockScreener: [
        { companyName: 'Stock A' },
        { companyName: 'Stock B' },
      ],
      searchStockCompany: [],
    };
    const newState = StockScreenersReducer(
      initialState,
      searchCompany('Stock C'),
    );
    expect(newState.searchStockCompany).toEqual([]);
  });

  it('should handle searchCompany with partial match', () => {
    const initialState = {
      stockScreener: [
        { companyName: 'Stock A' },
        { companyName: 'Stock B' },
      ],
      searchStockCompany: [],
    };
    const newState = StockScreenersReducer(
      initialState,
      searchCompany('Stock'),
    );
    expect(newState.searchStockCompany).toEqual([
      { companyName: 'Stock A' },
      { companyName: 'Stock B' },
    ]);
  });

  it('should handle searchCompany with multiple matches', () => {
    const initialState = {
      stockScreener: [
        { companyName: 'Stock A' },
        { companyName: 'Stock B' },
        { companyName: 'Stock C' },
      ],
      searchStockCompany: [],
    };
    const newState = StockScreenersReducer(
      initialState,
      searchCompany('Stock'),
    );
    expect(newState.searchStockCompany).toEqual([
      { companyName: 'Stock A' },
      { companyName: 'Stock B' },
      { companyName: 'Stock C' },
    ]);
  });

  it('should handle searchCompany with case-insensitive matching', () => {
    const initialState = {
      stockScreener: [
        { companyName: 'Stock A' },
        { companyName: 'Stock B' },
      ],
      searchStockCompany: [],
    };
    const newState = StockScreenersReducer(
      initialState,
      searchCompany('stock a'),
    );
    expect(newState.searchStockCompany).toEqual([{ companyName: 'Stock A' }]);
  });
});
