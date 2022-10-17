import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import CardItem from "./CardItem";
import data from "../data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Card = () => {
  // console.log(data);
  return (
    <Container
      className="rounded-4 mt-4 text-center "
      style={{ background: "#f48b29" }}
    >
      <Image
        className="mt-3"
        style={{ width: "400px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_the_Romani_people.svg/800px-Flag_of_the_Romani_people.svg.png"
        alt="roman"
      />
      <h1>Kim Bunlar?</h1>
      <p>
        Çingeneler, aslen Kuzey Hindistan kökenli olup günümüzde ağırlıklı
        olarak Avrupa'da yaşayan göçebe bir halk. Türkçede Roman sözcüğü de
        sıklıkla Çingene anlamında kullanılır. Hindistan'ın Pencap-Sind
        (Pakistan, Karaçi) nehir havzası boyunca Pakistan ve Afganistan'ın da
        içinde bulunduğu bölgelerden M.S. 420 civarında İran ve Anadolu
        üzerinden dünyaya yayılmış bir Hint-Avrupa halkıdır.
      </p>
      <Row>
        {data.map((item) => {
          return (
            <Col>
              <CardItem {...item} key={item.id} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Card;
