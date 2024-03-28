import React, { useState } from 'react';
import CSS from './CamperList.module.css';

import CamperItem from './CamperItem/CamperItem';
import { useSelector } from 'react-redux';
import { selectCamperData } from '../../redux/campers/selectors';
import Loader from 'componets/Loader/Loader';

const CamperList = ({ toggleModal }) => {
  const camperData = useSelector(selectCamperData);
  const [visibleCamperCount, setVisibleCamperCount] = useState(4);

  const favoritesCamperData = camperData.slice(0, visibleCamperCount);

  const loadMoreCamper = () => {
    setVisibleCamperCount(prevCount => prevCount + 4);
  };

  return (
    <div className={CSS.camperList}>
      {favoritesCamperData.length > 0 ? (
        favoritesCamperData.map(camper => (
          <CamperItem
            key={camper._id}
            camper={camper}
            toggleModal={toggleModal}
          />
        ))
      ) : (
        <Loader />
      )}
      {visibleCamperCount < camperData.length && (
        <button
          type="button"
          className={CSS.buttonLoad}
          onClick={loadMoreCamper}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CamperList;
