import CSS from './Filter.module.css';
import sprite from '../../assets/images/sprite.svg';
import {
  EQUIPMEN_TDATA,
  LOCATION_DATA,
  VACHICLE_DATA,
} from '../../constants/index';
import { useState } from 'react';

const Filter = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const isItemChecked = itemId => checkedItems[itemId] ?? false;

  const handleRadioChange = itemId => {
    setCheckedItems({ [itemId]: true });
  };

  return (
    <div className={CSS.filterContainer}>
      <div>
        <form id="locationForm">
          <label htmlFor="location">Location</label>
          <select
            id="location"
            name="location"
            defaultValue=""
            color="var(--accent-red)"
          >
            <option value="" disabled>
              Location
            </option>
            {LOCATION_DATA.map(location => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className={CSS.equiContainer}>
        <p>Filters</p>
        <h2 className={CSS.titleType}>Vehicle equipment</h2>
        <ul className={CSS.equipmentList}>
          {EQUIPMEN_TDATA.map(filter => (
            <li key={filter.name} className={CSS.equipmentItem}>
              <label className={CSS.labelCheckbox}>
                <input
                  type="checkbox"
                  className={CSS.checkBox}
                  checked={isItemChecked(filter.value)}
                />
                <svg className={CSS.icon}>
                  <use href={`${sprite}#${filter.icon}`} />
                </svg>
                <p className={CSS.textIcon}>{filter.text}</p>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className={CSS.typeContainer}>
        <h2 className={CSS.title}>Vehicle type</h2>
        <ul className={CSS.typetList}>
          {VACHICLE_DATA.map(item => (
            <li key={item.name} className={CSS.typetItem}>
              <label>
                <input
                  type="radio"
                  name="vehicleType"
                  className={CSS.radioBtn}
                  value={item.name}
                  checked={isItemChecked(item.value)}
                  onChange={() => handleRadioChange(item.value)}
                />
              </label>
              <svg className={CSS.iconType}>
                <use href={`${sprite}#${item.icon}`} />
              </svg>
              <p className={CSS.textIcon}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <button className={CSS.searchBtn}>Search</button>
    </div>
  );
};

export default Filter;
