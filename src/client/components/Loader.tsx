import React from 'react';
import '../styles/components/loader.scss';

const Loader = () => {
  return (
    <div className="loaderContainer">
      <div className="ldsRing">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
