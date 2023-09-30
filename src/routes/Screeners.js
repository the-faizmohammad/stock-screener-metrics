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
            Price:
            {stockScreeners.price}
          </li>
          <li>
            Volume:
            {stockScreeners.volume}
          </li>
          <li>
            Market Cap:
            {stockScreeners.marketCap}
          </li>
          <li>
            Last Annual Dividend:
            {stockScreeners.lastAnnualDividend}
          </li>
          <li>
            Exchange:
            {stockScreeners.exchange}
          </li>
          <li>
            Beta:
            {stockScreeners.beta}
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Screeners;
