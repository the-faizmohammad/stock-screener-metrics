import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStockScreenerData, searchCompany } from '../redux/stockScreener/StockScreenersSlice';
import Search from './Search';
import Footer from './Footer';
import CompanyCard from './CompanyCard';
import './Company.css';

function Company() {
  const dispatch = useDispatch();
  const stockScreeners = useSelector((state) => state.stockScreeners);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchStockScreenerData());
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleSearch = (searchValue) => {
    dispatch(searchCompany(searchValue.toLowerCase()));
  };

  return (
    <div className="navigation">
      <ul className="nav-bar">
        <li className="subject">Stock Screener</li>
        <li>
          <Search onSearch={handleSearch} />
        </li>
      </ul>
      <div className="companyContainer">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          stockScreeners.searchStockCompany.map((screener) => (
            <CompanyCard key={screener.symbol} screener={screener} />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Company;
