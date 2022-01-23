import React from 'react';
import loader from '../../assets/images/loader.gif';

function Loader() {
  return (
    <div className="loaderContainer">
      <img src={loader} alt="loader" className="rounded"/>
    </div>
  )
}

export default Loader;
