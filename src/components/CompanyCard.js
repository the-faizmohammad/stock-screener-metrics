// CompanyCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCompany } from '../redux/stockScreener/StockScreenersSlice';
import './CompanyCard.css';

function CompanyCard({ screener }) {
  const dispatch = useDispatch();

  return (
    <div className="company-card">
      <Link to="/Screeners" onClick={() => dispatch(selectCompany(screener))}>
        <ul className="company-list">
          <li className="companySymbol">{screener.symbol}</li>
          <li>{screener.country}</li>
          <li>{screener.companyName}</li>
          <li>{screener.sector}</li>
        </ul>
      </Link>
    </div>
  );
}

export default CompanyCard;
