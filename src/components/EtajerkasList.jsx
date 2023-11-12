import image1 from "../images/etajerkas/1.jpg";
import image2 from "../images/etajerkas/2.jpg";
import image3 from "../images/etajerkas/3.jpg";
import image4 from "../images/etajerkas/4.jpg";
import image5 from "../images/etajerkas/5.jpg";
import image6 from "../images/etajerkas/6.jpg";
import image7 from "../images/etajerkas/7.jpg";
import image8 from "../images/etajerkas/8.jpg";
const EtajerkasList = () => {
  const etagerkas = [
    { name: "2000mm-300mm-800mm", price: "2450грн", image: image1 },
    { name: "2000mm-300mm-800mm", price: "2450грн", image: image2 },
    { name: "2000mm-300mm-800mm", price: "2450грн", image: image3 },
    { name: "2000mm-300mm-800mm", price: "2450грн", image: image4 },
    { name: "2000mm-300mm-800mm", price: "2450грн", image: image5 },
    { name: "2000mm-300mm-800mm", price: "2450грн", image: image6 },
    { name: "2000mm-300mm-800mm", price: "2450грн", image: image7 },
    { name: "2000mm-300mm-800mm", price: "2450грн", image: image8 },
  ];
  return (
    <>
      <ul className="list-etaj">
        {etagerkas.map((e) => (
          <li key={e.name}>
            <img
              src={e.image}
              alt={e.name}
            />
            <div>
              <h3>{e.name}</h3>
              <p>{e.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="individual-h2">
        Також робимо вироби на заповлення. Терміни виготовлення 5-7 днів
      </h2>
    </>
  );
};

export default EtajerkasList;
