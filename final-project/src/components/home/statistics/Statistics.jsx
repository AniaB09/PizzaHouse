import React from "react";
import './statistics.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Statistics() {
    return (
        <section className='statistics'>
            <h2>Nasza pizzeria w liczbach</h2>
            <CardGroup>
                <Card className='statistics-card'>
                    <Card.Img variant='top' className='statistics-img' src='https://www.svgrepo.com/show/365739/smiley-thin.svg'></Card.Img>
                    <Card.Body>
                        <Card.Title className='statistics-title'>7856+</Card.Title>
                        <Card.Text>zadowolonych klientów</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='statistics-card'>
                    <Card.Img variant='top' className='statistics-img' src='https://www.svgrepo.com/show/365647/pizza-thin.svg'></Card.Img>
                    <Card.Body>
                        <Card.Title className='statistics-title'>8214+</Card.Title>
                        <Card.Text>zrealizowanych zamówień</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='statistics-card'>
                    <Card.Img variant='top' className='statistics-img' src='https://www.svgrepo.com/show/365769/star-thin.svg'></Card.Img>
                    <Card.Body>
                        <Card.Title className='statistics-title'>4.9/5</Card.Title>
                        <Card.Text>na podstawie tysięcy opinii</Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </section>
    )
}

export default Statistics;