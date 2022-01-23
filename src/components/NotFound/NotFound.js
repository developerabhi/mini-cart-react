import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/css/notFound.css';
import Localization from '../../common/Localization';

function NotFound(){
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404"></div>
            <h1>{Localization.FOUR_NOT_FOUR_TEXT}</h1>
            <h2>{Localization.PAGE_NOT_FOUND_HEADING_TEXT}</h2>
            <p>{Localization.PAGE_NOT_FOUND_DESCRIPTION_TEXT}</p>
            <Link to="/">{Localization.BACT_TO_LIST_TEXT}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
