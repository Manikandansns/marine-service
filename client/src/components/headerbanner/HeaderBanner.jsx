import React from 'react';
import './HeaderBanner.css';
import bannerlogo from '../../assets/logomini.svg';
import CustomSeparator from '../breadcrumb/BreadCrumb';

const HeaderBanner = ({ title, crumb }) => {
  return (
    <div className="header-banner-wrapper">
      <div className="header-banner-container">
        {/* <img src={bannerlogo} alt="Banner Logo" className="header-banner-image" /> */}
        <h1 className="header-banner-heading">{title}</h1>
        <CustomSeparator crumb={crumb} />
      </div>
    </div>
  );
};

export default HeaderBanner;
