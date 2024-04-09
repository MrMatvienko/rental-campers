import CSS from './Filter.module.css';
import sprite from '../../assets/images/sprite.svg';
import {
  EQUIPMENT_DATA,
  LOCATION_DATA,
  VACHICLE_DATA,
} from '../../constants/index';
import { useState } from 'react';

const Filter = ({ onFilter, resetFilters }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const [selectedEquipmentType, setSelectedEquipmentType] = useState({});

  const handleLocationChange = event => {
    setSelectedLocation(event.target.value);
  };

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    setSelectedEquipmentType(prevState => ({
      ...prevState,
      [name]: checked,
    }));

    const listItem = event.target.closest('li');
    if (listItem) {
      if (checked) {
        listItem.classList.add('selected');
      } else {
        listItem.classList.remove('selected');
      }
    }
  };

  const handleRadioChange = value => {
    setSelectedVehicleType(value);
  };

  const handleSearch = event => {
    event.preventDefault();
    onFilter(selectedLocation, selectedVehicleType, selectedEquipmentType);
  };

  const resetFiltersHandler = () => {
    setSelectedLocation('');
    setSelectedVehicleType('');
    setSelectedEquipmentType({});
    if (resetFilters) {
      resetFilters();
    }
  };

  return (
    <div className={CSS.filterContainer}>
      <div>
        <form id="locationForm" className={CSS.locationContaonerForm}>
          <label htmlFor="location" className={CSS.locationContaonerLabel}>
            Location
          </label>
          <select
            id={`location-selector`}
            name={`location-field`}
            defaultValue=""
            color="var(--accent-red)"
            onChange={handleLocationChange}
            className={CSS.selectLabel}
          >
            <option value="" disabled>
              Select location
            </option>
            {LOCATION_DATA.map((location, index) => (
              <option key={`${location.value}-${index}`} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className={CSS.equiContainer}>
        <p className={CSS.filterTitle}>Filters</p>
        <h2 className={CSS.titleType}>Vehicle equipment</h2>
        <ul className={CSS.equipmentList}>
          {EQUIPMENT_DATA.map((filter, index) => (
            <li key={`${filter.name}-${index}`} className={CSS.equipmentItem}>
              <label
                className={`${CSS.labelCheckbox} ${
                  selectedEquipmentType[filter.text] ? CSS.checked : ''
                }`}
              >
                <input
                  type="checkbox"
                  name={filter.text}
                  className={CSS.checkBox}
                  checked={selectedEquipmentType[filter.text] || false}
                  onChange={handleCheckboxChange}
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
          {VACHICLE_DATA.map((item, index) => (
            <li key={`${item.name}-${index}`} className={CSS.typetItem}>
              <label
                className={`${CSS.labelCheckbox} ${
                  selectedVehicleType === item.value ? CSS.checked : ''
                }`}
              >
                <input
                  type="radio"
                  name="vehicleType"
                  className={CSS.radioBtn}
                  value={item.name}
                  checked={selectedVehicleType === item.value}
                  onChange={() => handleRadioChange(item.value)}
                />
                <svg className={CSS.iconType}>
                  <use href={`${sprite}#${item.icon}`} />
                </svg>
                <p className={CSS.textIcon}>{item.text}</p>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className={CSS.btnContainer}>
        <button className={CSS.searchBtn} onClick={handleSearch}>
          Search
        </button>
        <button className={CSS.searchBtn} onClick={resetFiltersHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
