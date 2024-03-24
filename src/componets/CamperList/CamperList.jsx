import React from 'react';
import CSS from './CamperList.module.css';

import CamperItem from './CamperItem/CamperItem';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/campers/selectors';

const CamperList = ({ camperData, toggleModal }) => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={CSS.camperList}>
      {camperData.length > 0 ? (
        camperData.map(camper => (
          <CamperItem
            key={camper._id}
            camper={camper}
            isFavorite={favorites.some(fav => fav._id === camper._id)}
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
