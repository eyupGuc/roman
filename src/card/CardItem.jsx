import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useState } from "react";

const CardItem = (data) => {
  const { id, img, info } = data;
  // console.log(info);
  const [showImage, setShowImage] = useState(true);

  return (
    <Container
      className="CardItem p-4 rounded-2 h-100 p-2 bg-info"
      onClick={() => setShowImage(!showImage)}
      type="button"
    >
     {showImage &&(<Container > <Image
        style={{ width: "500px", height: "400px", borderRadius: "2rem" }}
        src={img}
      /></Container>)}
      {!showImage &&(<p>{info}</p>)}
    </Container>
  );
};
export default CardItem;
