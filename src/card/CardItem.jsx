import Container from 'react-bootstrap/Container';
import  Image  from "react-bootstrap/Image";


const CardItem=(data)=>{
  
    const{id,img,info}=data;
// console.log(info);

    return (
        <Container className='CardItem'>
<Image style={{width:"500px", height:"400px"}} src={img}/>
<p>{info}</p>
        </Container>
    )
}
export default CardItem;