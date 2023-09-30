import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiChevronLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { fetchStockScreener } from '../redux/stockScreener/StockScreenersSlice';
import '../components/styles/Screeners.css';

function Screeners() {
  const stockScreeners = useSelector((state) => state.stockScreeners.selectedCompany);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      dispatch(fetchStockScreener());
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="screenersContain">
      {isLoading && <div>Loading...</div>}
      <Link className="back-icon" to="/">
        <HiChevronLeft />
      </Link>
      <div key={stockScreeners.symbol} className="screenersList">
        <div className="screenersListHeader">
          <p>{stockScreeners.symbol}</p>
          <p>{stockScreeners.companyName}</p>
        </div>
        <ul className="screenersListItems">
          <li>
            <span className="label">Price:</span>
            <span className="value">{stockScreeners.price}</span>
          </li>
          <li>
            <span className="label">Volume:</span>
            <span className="value">{stockScreeners.volume}</span>
          </li>
          <li>
            <span className="label">Market Cap:</span>
            <span className="value">{stockScreeners.marketCap}</span>
          </li>
          <li>
            <span className="label">Last Annual Dividend:</span>
            <span className="value">{stockScreeners.lastAnnualDividend}</span>
          </li>
          <li>
            <span className="label">Exchange:</span>
            <span className="value">{stockScreeners.exchange}</span>
          </li>
          <li>
            <span className="label">Beta:</span>
            <span className="value">{stockScreeners.beta}</span>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Screeners;
