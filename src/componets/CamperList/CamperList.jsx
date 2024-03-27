import React, { useState } from 'react';
import CSS from './CamperList.module.css';

import CamperItem from './CamperItem/CamperItem';
import { useSelector } from 'react-redux';
import {
  selectCamperData,
  selectFilterData,
} from '../../redux/campers/selectors';
import Loader from 'componets/Loader/Loader';

const CamperList = ({ toggleModal }) => {
  const camperData = useSelector(selectCamperData);
  const filters = useSelector(selectFilterData);
  const [visibleCamperCount, setVisibleCamperCount] = useState(4);

  const filteredCamperData = camperData
    .filter(camper => {
      if (filters.length === 0) {
        return true;
      }
      return filters.every(filter => camper.equipment.includes(filter));
    })
    .slice(0, visibleCamperCount); // обмежуємо кількість відображених кемперів

  const loadMoreCamper = () => {
    setVisibleCamperCount(prevCount => prevCount + 4);
  };

  return (
    <div className={CSS.camperList}>
      {filteredCamperData.length > 0 ? (
        filteredCamperData.map(camper => (
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
