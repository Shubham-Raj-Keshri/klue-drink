import mineralWater from "../assets/images/mineral-water.jpg";
import pineappleWater from "../assets/images/pineapple-water.jpg";
import mangoWater from "../assets/images/mango-water.jpg";
import mineral1L from "../assets/images/mineral-1-litre.jpg";
import mineral2L from "../assets/images/mineral-2-litre.jpg";
import mineralCombo from "../assets/images/mineral-combo.jpg";
import strawberryWater from "../assets/images/strawberry-water.jpg";

const products = [
  {
    id: 1,
    name: "Mineral Water",
    price: "₹25",
    image: mineralWater,
    category: "mineral",
  },
  {
    id: 2,
    name: "Pineapple Flavored Water",
    price: "₹25",
    image: pineappleWater,
    category: "pineapple",
  },
  {
    id: 3,
    name: "Mango Flavored Water",
    price: "₹25",
    image: mangoWater,
    category: "mango",
  },
  {
    id: 4,
    name: "Mineral 1 Litre",
    price: "₹30",
    image: mineral1L,
    category: "mineral",
  },
  {
    id: 5,
    name: "Mineral 2 Litre",
    price: "₹40",
    image: mineral2L,
    category: "mineral",
  },
  {
    id: 6,
    name: "Mineral Combo",
    price: "₹60",
    image: mineralCombo,
    category: "mineral",
  },
  {
    id: 7,
    name: "Strawberry Water",
    price: "₹30",
    image: strawberryWater,
    category: "fruit",
  },
];

export default products;
