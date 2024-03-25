import Equipment from './Equipment/Equipment';
import Location from './Location/Location';
import VehicleTypeType from './VehicleType/VehicleType';
import CSS from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/campers/slice';
import { useState } from 'react';

const Filter = () => {
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
  return (
    <div className={CSS.filterContainer}>
      <Location />
      <Equipment
        handleFilterClick={handleFilterClick}
        selectedFilters={selectedFilters}
      />
      <VehicleTypeType />
      <button className={CSS.searchBtn} onClick={applyFilters}>
        Search
      </button>
    </div>
  );
};

export default Filter;
