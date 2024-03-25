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

  useEffect(() => {
    dispatch(fetchCamperData());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  const toggleModal = camper => {
    setSelectedCamper(camper);
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className={CSS.rentalContainer}>
      <Filter />
      <CamperList toggleModal={toggleModal} camperData={camperData} />
      {showModal && <Modal camper={selectedCamper} onClose={closeModal} />}
    </div>
  );
};

export default Rental;
