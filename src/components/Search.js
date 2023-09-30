import { useDispatch } from 'react-redux';
import { searchCompany } from '../redux/stockScreener/StockScreenersSlice';
import './styles/Search.css';

function Search() {
  const dispatch = useDispatch();

  const searchQuery = (e) => {
    const searchValue = e.target.value;
    dispatch(searchCompany(searchValue.toLowerCase()));
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
