import { useEffect, useState } from 'react';
import Filter from '../../componets/Filter/Filter';
import Modal from '../../componets/Modal/Modal';
import CSS from './Rental.module.css';
import CamperList from '../../componets/CamperList/CamperList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperData } from '../../redux/campers/operations';
import { selectCamperData } from '../../redux/campers/selectors';
const Rental = () => {
  const dispatch = useDispatch();
  const camperData = useSelector(selectCamperData);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  const handleFilter = (location, vehicleType, equipmentType) => {
    let filtered = camperData;

    if (location) {
      filtered = filtered.filter(camper => camper.location === location);
    }
    if (equipmentType) {
      filtered.forEach(camper => {
        Object.keys(equipmentType).forEach(key => {
          if (equipmentType[key] && camper.details && camper.details[key]) {
            filtered = filtered.filter(item => item.details[key]);
          }
        });
      });
    }
    if (vehicleType) {
      filtered = filtered.filter(camper => camper.form === vehicleType);
    }
    if (filteredCampers.length === 0) {
      alert('Sorry campers not found');
    }

    setFilteredCampers(filtered);
  };

  useEffect(() => {
    dispatch(fetchCamperData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCampers(camperData);
  }, [camperData]);

  const toggleModal = camper => {
    setSelectedCamper(camper);
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className={CSS.rentalContainer}>
      <Filter onFilter={handleFilter} />
      <CamperList toggleModal={toggleModal} camperData={filteredCampers} />
      {showModal && <Modal camper={selectedCamper} onClose={closeModal} />}
    </div>
  );
};

export default Rental;
