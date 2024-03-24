import CSS from "./Modal.module.css";
import sprite from "../../images/sprite.svg";
import { useEffect } from "react";
const Modal = ({ camper, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className={CSS.modalBackdrop} onClick={handleBackdropClick}></div>
      <div className={CSS.modalContainer}>
        <div className={CSS.firstLine}>
          <h2 className={CSS.title}>{camper.name}</h2>
          <svg className={CSS.icon} onClick={onClose}>
            <use href={sprite + "#icon-close"} />
          </svg>
        </div>
        <div className={CSS.secondLine}>
          <p> {camper.rating}</p>
          <p> {camper.location}</p>
        </div>
        <p> €{camper.price}</p>
        <div className={CSS.imageContainer}>
          {camper.gallery.map((image, index) => (
            <img
              className={CSS.image}
              key={index}
              src={image}
              alt="Camper Preview"
            />
          ))}
        </div>
        <p className={CSS.description}>{camper.description}</p>
        <div className={CSS.infoContainer}>
          <p>Features</p>
          <p>Reviews</p>
        </div>
      </div>
    </>
  );
};
export default Modal;
