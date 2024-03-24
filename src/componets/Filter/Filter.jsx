import SearchBtn from "../Button/SearchBtn/SearchBtn";
import Equipment from "./Equipment/Equipment";
import Location from "./Location/Location";
import VehicleTypeType from "./VehicleType/VehicleType";
import CSS from "./Filter.module.css";
const Filter = () => {
  return (
    <div className={CSS.filterContainer}>
      <Location />
      <Equipment />
      <VehicleTypeType />
      <SearchBtn />
    </div>
  );
};

export default Filter;
