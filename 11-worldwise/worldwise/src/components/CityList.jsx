import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spin from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spin />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((item) => (
        <CityItem city={item} key={item.id} />
      ))}
    </ul>
  );
}

export default CityList;
