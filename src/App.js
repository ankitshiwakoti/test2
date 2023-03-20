import logo from "./logo.svg";
import "./App.css";
import NFT from "./components/NFT";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import pic1 from "../src/images/img1.jpg";

function App() {
  const data = [
    {
      heading: "welcome",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  ",
      id: 1,
      img: { pic1 },
    },
    {
      heading: "welcome",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  ",
      id: 2,
      img: { pic1 },
    },
    {
      heading: "welcome",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ",
      id: 3,
      img: { pic1 },
    },
    {
      heading: "welcome",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  ",
      id: 4,
      img: { pic1 },
    },
    {
      heading: "welcome",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  ",
      id: 5,
      img: { pic1 },
    },
    {
      heading: "welcome",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ",
      id: 6,
      img: { pic1 },
    },
  ];
  return (
    <div className="App">
      <Test data={data} />
      {/* <NFT /> */}
    </div>
  );
}

export default App;
