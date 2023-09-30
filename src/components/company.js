import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStockScreener, selectCompany } from '../redux/stockScreener/StockScreenersSlice';
import Search from './Search';
import './styles/Company.css';

const Company = () => {
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

  const renderCompanyCards = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!Array.isArray(stockScreeners.searchStockCompany)) {
      return null;
    }

    return stockScreeners.searchStockCompany.map((screener) => (
      <div className="company-card" key={screener.symbol}>
        <Link
          to="/Screeners"
          onClick={() => dispatch(selectCompany(screener))}
        >
          <ul className="company-list" key={screener.symbol}>
            <li className="companySymbol">{screener.symbol}</li>
            <li className="company-details">{screener.country}</li>
            <li className="company-name">{screener.companyName}</li>
            <li className="company-details">{screener.sector}</li>
          </ul>
        </Link>
      </div>
    ));
  };

  return (
    <div className="navigation">
      <ul className="nav-bar">
        <li className="subject">Stock Screener</li>
        <li>
          <Search />
        </li>
      </ul>
      <div className="companyContainer">{renderCompanyCards()}</div>
    </div>
  );
};

export default Company;
