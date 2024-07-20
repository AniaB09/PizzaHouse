import React from 'react';
import './contact-options.css';
import Card from 'react-bootstrap/Card';
import CardGroup from "react-bootstrap/CardGroup";

function ContactOptions() {
    return (
        <section className='contact-options'>
            <CardGroup>
                <Card className='options-card'>
                    <Card.Img variant='top' className='options-img' src='https://www.svgrepo.com/show/193799/mail.svg'></Card.Img>
                    <Card.Body>
                        <Card.Title className='options-title'>Napisz</Card.Title>
                        <Card.Text>biuro@pizzahouse.pl</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='options-card'>
                    <Card.Img variant='top' className='options-img' src='https://www.svgrepo.com/show/193810/telephone-phone.svg'></Card.Img>
                    <Card.Body>
                        <Card.Title className='options-title'>Zadzwoń</Card.Title>
                        <Card.Text className='text-nowrap'>123-456-789</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='options-card'>
                    <Card.Img variant='top' className='options-img' src='https://www.svgrepo.com/show/193793/placeholder-pin.svg'></Card.Img>
                    <Card.Body>
                        <Card.Title className='options-title'>Odwiedź</Card.Title>
                        <Card.Text style={{marginBottom: '3px'}}>Włoska 27</Card.Text>
                        <Card.Text>50-000 Wrocław</Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </section>
    )
}

export default ContactOptions;
