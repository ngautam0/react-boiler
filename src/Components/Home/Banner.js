import React from 'react';

const Banner = ({ appName }) => {
  return (
    <div className="col-sm-12">
        <h1 >
          {appName.toLowerCase()}
        </h1>
        <p>some paragraph text</p>
    </div>
  );
};

export default Banner;
