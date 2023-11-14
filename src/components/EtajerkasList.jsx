import image1 from "../images/etajerkas/10.jpg";
import image2 from "../images/etajerkas/2.jpg";
import image3 from "../images/etajerkas/11.jpg";
import image4 from "../images/etajerkas/12.jpg";
import image5 from "../images/etajerkas/5.jpg";
import image6 from "../images/etajerkas/6.jpg";
import image7 from "../images/etajerkas/7.jpg";
import image8 from "../images/etajerkas/8.jpg";
import image9 from "../images/etajerkas/9.jpg";
const EtajerkasList = () => {
  const etagerkas = [
    {
      name: "2000mm-300mm-800mm",
      price: "4500грн",
      material: "Матеріал: сосна, вільха",
      image: image1,
    },
    {
      name: "2000mm-300mm-400mm",
      price: "2300грн",
      material: "Матеріал: сосна, вільха",
      image: image9,
    },

    {
      name: "1620mm-300mm-800mm",
      price: "3800грн",
      material: "Матеріал: сосна, вільха",
      image: image2,
    },
    {
      name: "1620mm-300mm-400mm",
      price: "1900грн",
      material: "Матеріал: сосна, вільха",
      image: image3,
    },
    {
      name: "1240mm-300mm-800mm",
      price: "3000грн",
      material: "Матеріал: сосна, вільха",
      image: image7,
    },
    {
      name: "1240mm-300mm-400mm",
      price: "1500грн",
      material: "Матеріал: сосна, вільха.",
      image: image4,
    },
    {
      name: "860mm-300mm-800mm",
      price: "2300грн",
      material: "Матеріал: сосна, вільха",
      image: image8,
    },
    {
      name: "860mm-300mm-400mm",
      price: "1100грн",
      material: "Матеріал: сосна, вільха",
      image: image5,
    },
    {
      name: "450mm-300mm-400mm",
      price: "450грн",
      material: "Матеріал: сосна, вільха",
      image: image6,
    },
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
              <h5>{e.material}</h5>
              <p>{e.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="individual-h2">
        Також робимо вироби на замовлення. Терміни виготовлення 5-7 днів
      </h2>
    </>
  );
};

export default EtajerkasList;
