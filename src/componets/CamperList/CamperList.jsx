import React from 'react';
import CSS from './CamperList.module.css';

import CamperItem from './CamperItem/CamperItem';
import { useSelector } from 'react-redux';
import {
  selectCamperData,
  selectFilterData,
} from '../../redux/campers/selectors';

const CamperList = ({ toggleModal }) => {
  const camperData = useSelector(selectCamperData);
  const filters = useSelector(selectFilterData);

  // Фільтруємо кемпери за вибраними фільтрами
  const filteredCamperData = camperData.filter(camper => {
    if (filters.length === 0) {
      return true; // Якщо немає фільтрів, повертаємо всі кемпери
    }
    // Перевіряємо, чи містить кемпер обрані фільтри
    return filters.every(filter => camper.equipment.includes(filter));
  });

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
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CamperList;
