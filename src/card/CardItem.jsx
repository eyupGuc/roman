import Container from 'react-bootstrap/Container';
import  Image  from "react-bootstrap/Image";


const CardItem=(props)=>{
    console.log(props);
    const{id,img,info}=props;
console.log(props[1])

    return (
        <Container className='CardItem'>
<h2>{props[1].id}</h2>
        </Container>
    )
}
export default CardItem;