import CSS from "./CamperItem.module.css";
import sprite from "../../../images/sprite.svg";
import { useEffect, useState } from "react";
const CamperItem = ({ camper, toggleModal }) => {
  const [heartColor, setHeartColor] = useState("#FFFFFF");

  const firstImage = camper.gallery[0];
  const text = camper.description.split(" ").slice(0, 11).join(" ");

  useEffect(() => {
    const savedHeartColor = localStorage.getItem(`${camper._id}`);
    if (savedHeartColor) {
      setHeartColor(savedHeartColor);
    }
  }, [camper._id]);

  const handleHeartClick = () => {
    const newColor = heartColor === "#FF0000" ? "#FFFFFF" : "#FF0000";
    setHeartColor(newColor);
    localStorage.setItem(`${camper._id}`, newColor);
  };
  return (
    <div className={CSS.itemContainer}>
      <img className={CSS.imageItem} src={firstImage} alt="Camper" />
      <div className={CSS.infoContainer}>
        <div className={CSS.info1}>
          <p className={CSS.fistLineInfo}>{camper.name}</p>
          <div className={CSS.priceHeart}>
            <p className={CSS.fistLineInfo}>€{camper.price}</p>
            <svg
              className={CSS.icon}
              onClick={handleHeartClick}
              fill={heartColor}
            >
              <use href={sprite + "#icon-heart"} />
            </svg>
          </div>
        </div>
        <div className={CSS.info2}>
          <p>{camper.rating}</p>
          <p>{camper.location}</p>
        </div>
        <p className={CSS.description}>{text}...</p>
        <ul className={CSS.listDateils}>
          <li className={CSS.camperDetailsItem}>
            <svg className={CSS.iconList}>
              <use href={sprite + "#icon-people"} />
            </svg>
            {camper.adults} adults
          </li>
          <li className={CSS.camperDetailsItem}>
            <svg className={CSS.iconList}>
              <use href={sprite + "#icon-at"} />
            </svg>
            {camper.transmission.charAt(0).toUpperCase() +
              camper.transmission.substring(1)}
          </li>
          <li className={CSS.camperDetailsItem}>
            <svg className={CSS.iconList}>
              <use href={sprite + "#icon-oil"} />
            </svg>
            {camper.engine.charAt(0).toUpperCase() + camper.engine.substring(1)}
          </li>
          {camper.details.kitchen === 1 && (
            <li className={CSS.camperDetailsItem}>
              <svg className={CSS.iconList}>
                <use href={sprite + "#icon-kitchen"} />
              </svg>
              Kitchen
            </li>
          )}
          {camper.details.beds > 0 && (
            <li className={CSS.camperDetailsItem}>
              <svg className={CSS.iconList}>
                <use href={sprite + "#icon-bed"} />
              </svg>
              {camper.details.beds} beds
            </li>
          )}
          {camper.details.TV === 1 && (
            <li className={CSS.camperDetailsItem}>
              <svg className={CSS.iconList}>
                <use href={sprite + "#icon-tv"} />
              </svg>
              TV
            </li>
          )}
          {camper.details.airConditioner === 1 && (
            <li className={CSS.camperDetailsItem}>AC </li>
          )}
        </ul>
        <button
          type="button"
          onClick={() => toggleModal(camper)}
          className={CSS.showBtn}
        >
          Show more
        </button>
      </div>
    </div>
  );
};
export default CamperItem;
