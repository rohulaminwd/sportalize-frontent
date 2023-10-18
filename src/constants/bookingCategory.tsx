import { FaBasketballBall } from 'react-icons/fa';
import { IoMdFootball } from 'react-icons/io';
import { MdGolfCourse, MdSportsCricket, MdSportsHockey, MdSportsTennis } from 'react-icons/md';
import image1 from "../assets/image/banner.jpg"
import image2 from "../assets/image/booking-field2.jpeg"
import image3 from "../assets/image/booking-fild1.jpg"
import image4 from "../assets/image/booking-fild1.jpg"

export const bookingCategory = [
  {
    label: "Football",
    value: <IoMdFootball />,
    img: image1,
    dsc: "Large rectangular pitch for the beautiful game of soccer."
  },
  {
    label: "Cricket",
    value: <MdSportsCricket />,
    img: image4,
    dsc: "Spacious field for the classic bat-and-ball game of cricket."

  },
  {
    label: "Tennis",
    value: <MdSportsTennis />,
    img: image1,
    dsc: "Tightly netted court for the precision sport of tennis."
  },
  {
    label: "Basket",
    value: <FaBasketballBall />,
    img: image3,
    dsc: "Hardwood court for the fast-paced game of basketball."
  },
  {
    label: "Hockey",
    value: <MdSportsHockey />,
    img: image2,
    dsc: "Spacious field for the classic bat-and-ball game of cricket."
  },
  {
    label: "Golf",
    value: <MdGolfCourse />,
    img: image4,
    dsc: "Court with a net for the dynamic game of volleyball."
  },
];

