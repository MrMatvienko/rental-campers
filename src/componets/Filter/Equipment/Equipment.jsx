import sprite from "../../../images/sprite.svg";
import CSS from "./Equipment.module.css";
const Equipment = () => {
  return (
    <div className={CSS.equiContainer}>
      <h2 className={CSS.title}>Vehicle equipment</h2>
      <ul className={CSS.equipmentList}>
        <li className={CSS.equipmentItem}>
          <svg className={CSS.icon}>
            <use href={sprite + "#icon-condishin"} />
          </svg>
          <p className={CSS.textIcon}>AC</p>
        </li>
        <li className={CSS.equipmentItem}>
          <svg className={CSS.icon}>
            <use href={sprite + "#icon-at"} />
          </svg>
          <p className={CSS.textIcon}>Automatic</p>
        </li>
        <li className={CSS.equipmentItem}>
          <svg className={CSS.icon}>
            <use href={sprite + "#icon-kitchen"} />
          </svg>
          <p className={CSS.textIcon}>Kitchen</p>
        </li>
        <li className={CSS.equipmentItem}>
          <svg className={CSS.icon}>
            <use href={sprite + "#icon-tv"} />
          </svg>
          <p className={CSS.textIcon}>TV</p>
        </li>
        <li className={CSS.equipmentItem}>
          <svg className={CSS.icon}>
            <use href={sprite + "#icon-route"} />
          </svg>
          <p className={CSS.textIcon}>Shower/WC</p>
        </li>
      </ul>
    </div>
  );
};

export default Equipment;
