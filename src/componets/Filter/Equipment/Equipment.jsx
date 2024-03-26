import sprite from '../../../images/sprite.svg';
import CSS from './Equipment.module.css';

const equipmentItems = [
  { name: 'AC', icon: 'icon-ac', text: 'AC' },
  { name: 'Automatic', icon: 'icon-at', text: 'Automatic' },
  { name: 'Kitchen', icon: 'icon-kitchen', text: 'Kitchen' },
  { name: 'TV', icon: 'icon-tv', text: 'TV' },
  { name: 'Shower/WC', icon: 'icon-route', text: 'Shower/WC' },
];

const Equipment = ({ handleFilterClick, selectedFilters }) => {
  return (
    <div className={CSS.equiContainer}>
      <h2 className={CSS.title}>Vehicle equipment</h2>
      <ul className={CSS.equipmentList}>
        {equipmentItems.map(item => (
          <li
            type="radio"
            key={item.name}
            className={`${CSS.equipmentItem} ${
              selectedFilters.includes(item.name) && CSS.selected
            }`}
            onClick={() => handleFilterClick(item.name)}
          >
            <svg className={CSS.icon}>
              <use href={sprite + '#' + item.icon} />
            </svg>
            <p className={CSS.textIcon}>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Equipment;
