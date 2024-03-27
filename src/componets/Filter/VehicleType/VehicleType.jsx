import { useState } from 'react';
import sprite from '../../../assets/images/sprite.svg';
import CSS from './VehicleType.module.css';
const vahicleTypeData = [
  { id: 1, icon: 'icon-camp1', text: 'Van' },
  { id: 2, icon: 'icon-camp2', text: 'Fully Intedrated' },
  { id: 3, icon: 'icon-camp3', text: 'Alcove' },
];
const VehicleType = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeChange = id => {
    setSelectedType(id);
  };

  return (
    <div className={CSS.typeContainer}>
      <h2 className={CSS.title}>Vehicle type</h2>
      <ul className={CSS.typetList}>
        {vahicleTypeData.map(item => (
          <li key={item.id} className={CSS.typetItem}>
            <label>
              <input
                type="radio"
                name="vehicleType"
                className={CSS.radioBtn}
                value={item.id}
                checked={selectedType === item.id}
                onChange={() => handleTypeChange(item.id)}
              />
            </label>
            <svg className={CSS.icon}>
              <use href={`${sprite}#${item.icon}`} />
            </svg>
            <p className={CSS.textIcon}>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleType;
