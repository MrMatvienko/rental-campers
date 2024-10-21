import { Link } from 'react-router-dom';
import CSS from './Home.module.css';
const Home = () => {
  return (
    <div className={CSS.mainPages}>
      <div className={CSS.containerHomePage}>
        <h1 className={CSS.title}>
          The largest selection of campers for travel
        </h1>
        <Link to="/rental" className={CSS.rentalButton}>
          Rental
        </Link>
      </div>
    </div>
  );
};

export default Home;
