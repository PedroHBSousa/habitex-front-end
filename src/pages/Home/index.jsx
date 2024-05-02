import Header from "../../global/components/Header";
import Background from "../../global/components/Background";

function Home() {
  const imageUrls = [
    require("../../assets/img/background.jpg"),
    require("../../assets/img/image2.jpg"),
  ];
  const teste = 0;
  return (
    <div>
      <Header />
      <Background imageUrl={imageUrls[teste]} />
    </div>
  );
}

export default Home;
