import CamperItem from 'componets/CamperList/CamperItem/CamperItem';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/campers/selectors';
import CSS from './Favorites.module.css';
const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={CSS.favoritesContainer}>
      <h2>Favorites camper</h2>
      {favorites.length === 0 ? (
        <p className={CSS.text}>Your favorites list is empty...</p>
      ) : (
        <div>
          {favorites.map(camper => (
            <CamperItem key={camper._id} camper={camper} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
