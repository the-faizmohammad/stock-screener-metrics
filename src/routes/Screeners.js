import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ImStatsDots } from 'react-icons/im';
import { fetchStockScreener } from '../redux/stockScreener/StockScreenersSlice';
import '../components/styles/Screeners.css';

const Screeners = () => {
  const { companyId } = useParams();
  const stockScreeners = useSelector((state) => state.stockScreeners.selectedCompany);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await dispatch(fetchStockScreener(companyId));
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch, companyId]);

  return (
    <div className="screenersContain">
      {isLoading && <div>Loading...</div>}
      <div className="details__ul">
        <li className="li-item name">
          <div className="icon">
            <ImStatsDots />
          </div>
          <div className="name-div">{stockScreeners.companyName}</div>
        </li>
        <li className="li-item details">
          <div className="details-div">STOCK DETAILS</div>
        </li>
        <li className="li-item">
          <span className="left">Price: </span>
          <div className="right">{stockScreeners.price}</div>
        </li>
        <li className="li-item">
          <span className="left">Volume: </span>
          <div className="right">{stockScreeners.volume}</div>
        </li>
        <li className="li-item">
          <span className="left">Market Cap: </span>
          <div className="right">{stockScreeners.marketCap}</div>
        </li>
        <li className="li-item">
          <span className="left">Last Annual Dividend: </span>
          <div className="right">{stockScreeners.lastAnnualDividend}</div>
        </li>
        <li className="li-item">
          <span className="left">Exchange: </span>
          <div className="right">{stockScreeners.exchange}</div>
        </li>
        <li className="li-item">
          <span className="left">Beta: </span>
          <div className="right">{stockScreeners.beta}</div>
        </li>
      </div>
    </div>
  );
};

export default Screeners;
