import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import { searchCompany } from '../redux/stockScreener/StockScreenersSlice';
import './styles/Search.css';

function Search() {
  const dispatch = useDispatch();

  const debouncedSearch = debounce((searchValue) => {
    dispatch(searchCompany(searchValue.toLowerCase()));
  }, 300);

  const searchQuery = (e) => {
    const searchValue = e.target.value;
    debouncedSearch(searchValue);
  };

  return (
    <input
      className="search"
      type="text"
      placeholder="Search company..."
      onChange={searchQuery}
    />
  );
}

export default Search;
