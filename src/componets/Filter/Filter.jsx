import CSS from './Filter.module.css';
import sprite from '../../assets/images/sprite.svg';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/campers/slice';
import {
  equipmentData,
  locationData,
  vahicleTypeData,
} from '../../constants/index';
import { useState } from 'react';

const Filter = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch();

  const handleFilterClick = filter => {
    const isSelected = selectedFilters.includes(filter);
    if (isSelected) {
      setSelectedFilters(selectedFilters.filter(item => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const applyFilters = () => {
    dispatch(setFilters(selectedFilters));
  };
  const handleCheckboxChange = itemId => {
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId],
    }));
  };
  const isItemChecked = itemId => checkedItems[itemId] ?? false;

  const handleRadioChange = itemId => {
    setCheckedItems({ [itemId]: true });
  };

  return (
    <div className={CSS.filterContainer}>
      <div>
        <form id="locationForm">
          Location
          <label>
            <select
              placeholder="Location"
              options={locationData}
              color="var(--accent-red)"
            />
          </label>
        </form>
      </div>
      <div className={CSS.equiContainer}>
        <p>Filters</p>
        <h2 className={CSS.titleType}>Vehicle equipment</h2>
        <ul className={CSS.equipmentList}>
          {equipmentData.map(item => (
            <li
              key={item.id}
              className={CSS.equipmentItem}
              onClick={() => handleFilterClick(item)}
            >
              <label className={CSS.labelCheckbox}>
                <input
                  type="checkbox"
                  className={CSS.checkBox}
                  checked={isItemChecked(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <svg className={CSS.icon}>
                  <use href={`${sprite}#${item.icon}`} />
                </svg>
                <p className={CSS.textIcon}>{item.text}</p>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className={CSS.typeContainer}>
        <h2 className={CSS.title}>Vehicle type</h2>
        <ul className={CSS.typetList}>
          {vahicleTypeData.map(item => (
            <li
              key={item.id}
              className={CSS.typetItem}
              onClick={() => handleFilterClick(item)}
            >
              <label>
                <input
                  type="radio"
                  name="vehicleType"
                  className={CSS.radioBtn}
                  value={item.id}
                  checked={isItemChecked(item.id)}
                  onChange={() => handleRadioChange(item.id)}
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
      <button className={CSS.searchBtn} onClick={applyFilters}>
        Search
      </button>
    </div>
  );
};

export default Filter;
