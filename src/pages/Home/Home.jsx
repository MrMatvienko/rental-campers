import { Link } from 'react-router-dom';
import CSS from './Home.module.css';
const Home = () => {
  return (
    <div className={CSS.mainPages}>
      <h1 className={CSS.title}>The largest selection of campers for travel</h1>
      <Link to="/rental" className={CSS.rentalButton}>
        Rental
      </Link>
    </div>
  );
};

export default Home;
