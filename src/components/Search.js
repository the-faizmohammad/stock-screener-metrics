import { useDispatch } from 'react-redux';
import { MdQueryStats } from 'react-icons/md';
import { searchCompany } from '../redux/stockScreener/StockScreenersSlice';
import './styles/Search.css';

function Search() {
  const dispatch = useDispatch();

  const searchQuery = (e) => {
    const searchValue = e.target.value;
    dispatch(searchCompany(searchValue.toLowerCase()));
  };

  return (
    <section className="companies-container">
      <div className="company-item">
        <div className="company-header">
          <div className="title-icon">
            <MdQueryStats className="icon" />
          </div>
          <h1>STOCK PERFORMANCE</h1>
        </div>
        <p className="company-subtitle">
          NASDAQ
          {' '}
          {'            '}
          {' '}
          WATCHLIST
        </p>
        <input
          className="input"
          type="text"
          placeholder="Search company..."
          onChange={searchQuery}
        />
      </div>
    </section>
  );
}

export default Search;
