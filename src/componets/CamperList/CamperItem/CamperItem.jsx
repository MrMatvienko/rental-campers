import CSS from './CamperItem.module.css';
import sprite from '../../../assets/images/sprite.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../../redux/campers/slice';
import Modal from 'componets/Modal/Modal';
const CamperItem = ({ camper }) => {
  const [heartColor, setHeartColor] = useState('#FFFFFF');
  const [showModal, setShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.camper.favorites);

  const firstImage = camper.gallery[0];
  const text = camper.description.split(' ').slice(0, 11).join(' ');

  useEffect(() => {
    const savedHeartColor = localStorage.getItem(`${camper._id}`);
    if (savedHeartColor) {
      setHeartColor(savedHeartColor);
    }
    const isFavorite = favorites.some(item => item._id === camper._id);
    if (isFavorite) {
      setHeartColor('#FF0000');
    }
  }, [camper._id, favorites]);

  const toggleModal = camper => {
    setSelectedCamper(camper);
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleHeartClick = () => {
    const newColor = heartColor === '#FF0000' ? '#FFFFFF' : '#FF0000';
    setHeartColor(newColor);
    localStorage.setItem(`${camper._id}`, newColor);
    if (newColor === '#FF0000') {
      dispatch(addToFavorites(camper));
    } else {
      dispatch(removeFromFavorites(camper));
    }
  };
  const isFavorite = favorites.some(item => item._id === camper._id);
  return (
    <div className={CSS.itemContainer}>
      <img className={CSS.imageItem} src={firstImage} alt="Camper" />
      <div className={CSS.infoContainer}>
        <div className={CSS.info1}>
          <p className={CSS.fistLineInfo}>{camper.name}</p>
          <div className={CSS.priceHeart}>
            <p className={CSS.fistLineInfo}>€{camper.price}.00</p>
            <svg
              className={CSS.icon}
              onClick={handleHeartClick}
              fill={isFavorite ? '#FF0000' : '#FFFFFF'}
            >
              <use href={sprite + '#icon-heart'} />
            </svg>
          </div>
        </div>
        <div className={CSS.info2}>
          <svg
            className={CSS.icon}
            style={{ width: '14px', fill: 'var(--rating)' }}
          >
            <use href={sprite + '#icon-star'} />
          </svg>
          <p>{camper.rating}</p>
          <p>({camper.reviews.length} Reviews)</p>
          <svg style={{ marginLeft: '16px' }} className={CSS.iconList}>
            <use href={sprite + '#icon-map-pin'} />
          </svg>
          <p>{camper.location}</p>
        </div>
        <p className={CSS.description}>{text}...</p>
        <ul className={CSS.listDateils}>
          <li className={CSS.camperDetailsItem}>
            <svg className={CSS.iconList}>
              <use href={sprite + '#icon-people'} />
            </svg>
            {camper.adults} adults
          </li>
          <li className={CSS.camperDetailsItem}>
            <svg className={CSS.iconList}>
              <use href={sprite + '#icon-at'} />
            </svg>
            {camper.transmission.charAt(0).toUpperCase() +
              camper.transmission.substring(1)}
          </li>
          <li className={CSS.camperDetailsItem}>
            <svg className={CSS.iconList}>
              <use href={sprite + '#icon-oil'} />
            </svg>
            {camper.engine.charAt(0).toUpperCase() + camper.engine.substring(1)}
          </li>
          {camper.details.kitchen === 1 && (
            <li className={CSS.camperDetailsItem}>
              <svg className={CSS.iconList}>
                <use href={sprite + '#icon-kitchen'} />
              </svg>
              Kitchen
            </li>
          )}
          {camper.details.beds > 0 && (
            <li className={CSS.camperDetailsItem}>
              <svg className={CSS.iconList}>
                <use href={sprite + '#icon-bed'} />
              </svg>
              {camper.details.beds} beds
            </li>
          )}
          {camper.details.TV === 1 && (
            <li className={CSS.camperDetailsItem}>
              <svg className={CSS.iconList}>
                <use href={sprite + '#icon-tv'} />
              </svg>
              TV
            </li>
          )}
          {camper.details.airConditioner === 1 && (
            <li className={CSS.camperDetailsItem}>
              <svg className={CSS.iconList}>
                <use href={sprite + '#icon-ac'} />
              </svg>
              AC{' '}
            </li>
          )}
        </ul>
        <button
          type="button"
          onClick={() => toggleModal(camper)}
          className={CSS.showBtn}
        >
          Show more
        </button>
        {showModal && <Modal camper={selectedCamper} onClose={closeModal} />}
      </div>
    </div>
  );
};
export default CamperItem;
