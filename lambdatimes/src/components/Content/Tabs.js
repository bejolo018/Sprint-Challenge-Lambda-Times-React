import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map( tab => (
        < Tab selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} tab ={tab} />
      ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tab: PropTypes.string
}

export default Tabs;
