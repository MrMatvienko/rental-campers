import CSS from "./Home.module.css";
const Home = () => {
  return (
    <div className={CSS.mainPages}>
      <h1 className={CSS.title}>The largest selection of campers for travel</h1>
      <button className={CSS.rentalButton}>Rental</button>
    </div>
  );
};

export default Home;
