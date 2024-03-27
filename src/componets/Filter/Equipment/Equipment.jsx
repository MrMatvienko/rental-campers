import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import CSS from './Equipment.module.css';

const equipmentData = [
  { id: 1, icon: 'icon-ac', text: 'AC' },
  { id: 2, icon: 'icon-at', text: 'Automatic' },
  { id: 3, icon: 'icon-kitchen', text: 'Kitchen' },
  { id: 4, icon: 'icon-tv', text: 'TV' },
  { id: 5, icon: 'icon-route', text: 'Shower/WC' },
];

const Equipment = ({ handleFilterClick, selectedFilters }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = itemId => {
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId],
    }));
  };

  const isItemChecked = itemId => checkedItems[itemId] ?? false;
  return (
    <div className={CSS.equiContainer}>
      <p>Filters</p>
      <h2 className={CSS.title}>Vehicle equipment</h2>
      <ul className={CSS.equipmentList}>
        {equipmentData.map(item => (
          <li
            key={item.id}
            className={`${CSS.equipmentItem} ${
              isItemChecked(item.id) ? CSS.checked : ''
            }`}
            onClick={() => handleCheckboxChange(item.id)}
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
  );
};

export default Equipment;
