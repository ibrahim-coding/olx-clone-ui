import img2 from "../../assets/categorysection.png";
import "./categories.css";
import img3 from "../../assets/vehical.png";
import img4 from "../../assets/houseforsale.png";
import img6 from "../../assets/electronic.png";
import img5 from "../../assets/houseforrent.png";
import img7 from "../../assets/bike.png";
import img8 from "../../assets/industrial.png";
import img9 from "../../assets/job.png";
export default function Categories() {
  let allCat = [
    {
      title: "Mobiles",
      image: img2,
    },
    {
      title: "Veichels",
      image: img3,
    },
    {
      title: "Property for sale",
      image: img5,
    },
    {
      title: "Electronic and home appliances",
      image: img6,
    },
    {
      title: "Bikes ",
      image: img7,
    },
    {
      title: "Business, Industrial & Agriculture",
      image: img8,
    },
    {
      title: "Jobs",
      image: img9,
    },
  
  ];

  return (
    <div className="category-wrapper">
      <h3 className="mb-5">All categories</h3>
      <div className="cat-items">
        {allCat.map((cat) => {
          return (
            <div className="cat-symbol" key={cat.title}>
              <img src={cat.image} />
              <span className="cat-text mt-3">{cat.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
