import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import CardItem from './CardItem';

const Card=()=>{
    return (
        <Container className='mt-4 text-center bg-warning'>
            <Image style={{width:"300px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_the_Romani_people.svg/800px-Flag_of_the_Romani_people.svg.png" alt="roman"/>
            <h1>Kim Bunlar?</h1>
            <p>Çingeneler, aslen Kuzey Hindistan kökenli olup günümüzde ağırlıklı olarak Avrupa'da yaşayan göçebe bir halk. Türkçede Roman sözcüğü de sıklıkla Çingene anlamında kullanılır. Hindistan'ın Pencap-Sind (Pakistan, Karaçi) nehir havzası boyunca Pakistan ve Afganistan'ın da içinde bulunduğu bölgelerden M.S. 420 civarında İran ve Anadolu üzerinden dünyaya yayılmış bir Hint-Avrupa halkıdır.</p>
            
            <CardItem/>
        </Container>
    )
}
export default Card;