import React from "react";
import './footer.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className='footer bg-light text-dark'>
            <Container>
                <Row>
                    <Col className='footer-column'>
                        <h5>PizzaHouse</h5>
                        <li><a href='/'>Strona główna</a></li>
                        <li><a href='/about'>O nas</a></li>
                        <li><a href='/order'>Menu/Zamów</a></li>
                        <li><a href='/contact'>Kontakt</a></li>
                    </Col>
                    <Col className='footer-column'>
                        <h5>Godziny otwarcia</h5>
                        <p className='text-nowrap'>poniedziałek: nieczynne</p>
                        <p className='text-nowrap'>wtorek - piątek: 12:00 - 23:00</p>
                        <p className='text-nowrap'>sobota - niedziela: 13:00 - 24:00</p>
                    </Col>
                    <Col className='footer-column'>
                        <h5>Kontakt</h5>
                        <div className='footer-contact text-nowrap'><span className="material-symbols-outlined mr-1">location_on</span><p>Włoska 27, 50-000 Wrocław</p></div>
                        <div className='footer-contact text-nowrap'><span className="material-symbols-outlined mr-1">call</span><p>123 456 789</p></div>
                    </Col>
                </Row>
                <Row>
                    <p className='copyright'>&copy; 2024 PizzaHouse. Wszelkie prawa zastrzeżone.</p>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
