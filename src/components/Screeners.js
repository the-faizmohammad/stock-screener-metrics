import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiChevronLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { fetchStockScreener } from '../redux/stockScreener/StockScreenersSlice';
import './Screeners.css';

function Screeners() {
  const stockScreeners = useSelector((state) => state.stockScreeners.selectedCompany);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(fetchStockScreener());
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
        <div className="company-symbol">
          <p className="company-name">{stockScreeners.symbol}</p>
          <p className="company-name">{stockScreeners.companyName}</p>
        </div>
        <ul className="innerList">
          <li>Beta</li>
          <li>{stockScreeners.beta}</li>
        </ul>
        <ul className="innerList">
          <li>Price</li>
          <li>{stockScreeners.price}</li>
        </ul>
        <ul className="innerList">
          <li>Last Annual Dividend</li>
          <li>{stockScreeners.lastAnnualDividend}</li>
        </ul>
        <ul className="innerList">
          <li>Volume</li>
          <li>{stockScreeners.volume}</li>
        </ul>
        <ul className="innerList">
          <li>Exchange</li>
          <li>{stockScreeners.exchange}</li>
        </ul>
        <ul className="innerList">
          <li>Market Cap</li>
          <li>{stockScreeners.marketCap}</li>
        </ul>
      </div>
    </div>
  );
}

export default Screeners;
