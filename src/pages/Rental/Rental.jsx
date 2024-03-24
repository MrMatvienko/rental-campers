import { useState } from "react";
import Filter from "../../componets/Filter/Filter";
import Modal from "../../componets/Modal/Modal";
import CSS from "./Rental.module.css";
import CamperList from "../../componets/CamperList/CamperList";
const Rental = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  const toggleModal = (camper) => {
    setSelectedCamper(camper);
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className={CSS.rentalContainer}>
      <Filter />
      <CamperList toggleModal={toggleModal} />
      {showModal && <Modal camper={selectedCamper} onClose={closeModal} />}
    </div>
  );
};

export default Rental;
