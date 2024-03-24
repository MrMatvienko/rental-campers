import sprite from "../../../images/sprite.svg";
import CSS from "./VehicleTypeType.module.css";
const VehicleTypeType = () => {
  return (
    <div className={CSS.typeContainer}>
      <h2 className={CSS.title}>Vehicle type</h2>
      <ul className={CSS.typetList}>
        <li className={CSS.typetItem}>
          <svg className={CSS.icon}>
            <use href={sprite + "#icon-camp1"} />
          </svg>
          <p className={CSS.textIcon}>Van</p>
        </li>
        <li className={CSS.typetItem}>
          <svg className={CSS.icon}>
            <use href={sprite + "#icon-camp2"} />
          </svg>
          <p className={CSS.textIcon}>Fully Integrated</p>
        </li>
        <li className={CSS.typetItem}>
          <svg className={CSS.icon}>
            <use href={sprite + "#icon-camp3"} />
          </svg>
          <p className={CSS.textIcon}>Alcove</p>
        </li>
      </ul>
    </div>
  );
};

export default VehicleTypeType;
