import React from 'react';
import CSS from './CamperList.module.css';

import CamperItem from './CamperItem/CamperItem';

const CamperList = ({ camperData, toggleModal }) => {
  return (
    <div className={CSS.camperList}>
      {camperData.length > 0 ? (
        camperData.map(camper => (
          <CamperItem
            key={camper._id}
            camper={camper}
            toggleModal={toggleModal}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CamperList;
