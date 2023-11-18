import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { ImStatsBars } from 'react-icons/im';
import { fetchStockScreener, selectCompany } from '../redux/stockScreener/StockScreenersSlice';
import Footer from './Footer';
import './styles/Company.css';

function Company() {
  const dispatch = useDispatch();
  const stockScreeners = useSelector((state) => state.stockScreeners);
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
    <div>
      <div className="companyContainer">
        {isLoading && <p>Loading...</p>}
        {Array.isArray(stockScreeners.searchStockCompany)
          && stockScreeners.searchStockCompany.map((screener) => (
            <div className="company-card" key={screener.symbol}>
              <div className="company-icons">
                <div className="stats-icon">
                  <ImStatsBars />
                </div>
              </div>
              <Link
                to={`/Screeners/${screener.companyId}`}
                onClick={() => dispatch(selectCompany(screener))}
              >
                <BsArrowRightCircle className="arrow-right" />
                <ul className="company-list" key={screener.symbol}>
                  <li className="companySymbol">{screener.symbol}</li>
                  <li>{screener.sector}</li>
                  <li>{screener.price}</li>
                </ul>
              </Link>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Company;
