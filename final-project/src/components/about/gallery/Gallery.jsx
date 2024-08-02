import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const photos = [
    'https://st3.depositphotos.com/12985848/19499/i/600/depositphotos_194998388-stock-photo-close-view-cooking-process-raw.jpg',
    'https://st4.depositphotos.com/12985656/20919/i/600/depositphotos_209190996-stock-photo-partial-view-woman-apron-holding.jpg',
    'https://st4.depositphotos.com/7325956/20063/i/600/depositphotos_200635380-stock-photo-beautiful-girl-cutting-slice-pizza.jpg',
    'https://static6.depositphotos.com/1077338/620/i/600/depositphotos_6206799-stock-photo-pizza-with-fungi.jpg',
    'https://st4.depositphotos.com/1372933/24609/i/600/depositphotos_246097516-stock-photo-gourmet-italian-pizza-pint-alcohol.jpg',
    'https://st3.depositphotos.com/1594308/13807/i/600/depositphotos_138070054-stock-photo-group-of-friendly-teens.jpg',
    'https://st4.depositphotos.com/13349494/20744/i/600/depositphotos_207440838-stock-photo-cropped-shot-chef-putting-cheese.jpg',
    'https://st4.depositphotos.com/14670260/30316/i/600/depositphotos_303163314-stock-photo-vegetarian-italian-pizza-with-tomatoes.jpg',
    'https://st2.depositphotos.com/3833507/8936/i/600/depositphotos_89364624-stock-photo-pizza-margherita-on-table.jpg',
    'https://static9.depositphotos.com/1594308/1166/i/600/depositphotos_11661526-stock-photo-in-pizzeria.jpg',
    'https://st2.depositphotos.com/1262401/9494/i/600/depositphotos_94944892-stock-photo-peperoni-and-cheese-pizza.jpg',
    'https://st4.depositphotos.com/6538116/26735/i/600/depositphotos_267359194-stock-photo-stretch-cheese-piece-of-homemade.jpg'
];

function Gallery() {
    return (
        <section className='gallery mt-4'>
            <Container>
                <Row>
                    {photos.map((photo, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                            <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Gallery;
