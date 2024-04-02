import CSS from './Features.module.css';
import sprite from '../../assets/images/sprite.svg';
const Features = ({ camper }) => {
  const {
    adults,
    transmission,
    details,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = camper;
  return (
    <div className={CSS.featuresContainer}>
      <div className={CSS.camperDetailsInfo}>
        <ul className={CSS.listDateils}>
          <li className={CSS.camperDetailsItem}>
            <svg className={CSS.iconList}>
              <use href={sprite + '#icon-people'} />
            </svg>
            {adults} adults
          </li>
          <li className={CSS.camperDetailsItem}>
            <svg className={CSS.iconList}>
              <use href={sprite + '#icon-at'} />
            </svg>
            {transmission.charAt(0).toUpperCase() + transmission.substring(1)}
          </li>
          <li className={CSS.camperDetailsItem}>
            <svg className={CSS.iconList}>
              <use href={sprite + '#icon-oil'} />
            </svg>
            {engine.charAt(0).toUpperCase() + engine.substring(1)}
          </li>
          {details.kitchen === 1 && (
            <li className={CSS.camperDetailsItem}>
              <svg className={CSS.iconList}>
                <use href={sprite + '#icon-kitchen'} />
              </svg>
              Kitchen
            </li>
          )}
          {details.beds > 0 && (
            <li className={CSS.camperDetailsItem}>
              <svg className={CSS.iconList}>
                <use href={sprite + '#icon-bed'} />
              </svg>
              {details.beds} beds
            </li>
          )}
          {details.TV === 1 && (
            <li className={CSS.camperDetailsItem}>
              <svg className={CSS.iconList}>
                <use href={sprite + '#icon-tv'} />
              </svg>
              TV
            </li>
          )}
          {details.airConditioner === 1 && (
            <li className={CSS.camperDetailsItem}>
              <svg className={CSS.iconList}>
                <use href={sprite + '#icon-ac'} />
              </svg>
              AC
            </li>
          )}
        </ul>
        <div>
          <p>Vehicle details</p>
          <ul className={CSS.vehicleList}>
            <li className={CSS.vehicleItem}>
              <p>Form</p>
              <p>{form}</p>
            </li>
            <li className={CSS.vehicleItem}>
              <p>Length</p>
              <p>{length}</p>
            </li>
            <li className={CSS.vehicleItem}>
              <p>Width</p>
              <p>{width}</p>
            </li>
            <li className={CSS.vehicleItem}>
              <p>Height</p>
              <p>{height}</p>
            </li>
            <li className={CSS.vehicleItem}>
              <p>Tank</p>
              <p>{tank}</p>
            </li>
            <li className={CSS.vehicleItem}>
              <p>Consumption</p>
              <p>{consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={CSS.sendForm}>
        <p>Book your campervan now</p>
        <p>Stay connected! We are always ready to help you.</p>
        <form>
          <input className={CSS.inputSend} type="text" placeholder="Name" />
          <input className={CSS.inputSend} type="email" placeholder="Email" />
          <input className={CSS.inputSend} type="date" placeholder="Date" />
          <textarea className={CSS.inputSend} placeholder="Comment"></textarea>
        </form>
        <button type="submit">Send</button>
      </div>
    </div>
  );
};
export default Features;
