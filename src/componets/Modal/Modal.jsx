import CSS from './Modal.module.css';
import sprite from '../../assets/images/sprite.svg';
import { useEffect, useState } from 'react';
import Features from 'componets/Features/Features';
import Reviews from 'componets/Reviews/Reviews';
const Modal = ({ camper, onClose }) => {
  const [activeTab, setActiveTab] = useState();
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={CSS.modalBackdrop} onClick={handleBackdropClick}></div>
      <div className={CSS.modalContainer}>
        <div className={CSS.firstLine}>
          <h2 className={CSS.title}>{camper.name}</h2>
          <svg className={CSS.icon} onClick={onClose}>
            <use href={sprite + '#icon-close'} />
          </svg>
        </div>
        <div className={CSS.secondLine}>
          <div className={CSS.ratingModal}>
            <svg width={20} height={20} fill="var(--rating)">
              <use href={sprite + '#icon-star'} />
            </svg>
            <div className={CSS.currentLine}>
              <p> {camper.rating}</p>
              <p>({camper.reviews.length} Reviews)</p>
            </div>
          </div>
          <div className={CSS.locationWrap}>
            <svg width={20} height={20}>
              <use href={sprite + '#icon-map-pin'} />
            </svg>
            <p> {camper.location}</p>
          </div>
        </div>
        <p className={CSS.priceText}> €{camper.price}.00</p>
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
          <p
            onClick={() => handleTabClick('Features')}
            className={`${
              activeTab === 'Features'
                ? `${CSS.activeTab} ${CSS.features}`
                : CSS.features
            } ${activeTab === 'Features' ? CSS.current : ''}`}
          >
            Features
          </p>
          <p
            onClick={() => handleTabClick('Reviews')}
            className={`${
              activeTab === 'Reviews'
                ? `${CSS.activeTab} ${CSS.features}`
                : CSS.features
            } ${activeTab === 'Reviews' ? CSS.current : ''}`}
          >
            Reviews
          </p>
        </div>
        {activeTab === 'Features' && <Features camper={camper} />}
        {activeTab === 'Reviews' && <Reviews camper={camper} />}
      </div>
    </>
  );
};
export default Modal;
