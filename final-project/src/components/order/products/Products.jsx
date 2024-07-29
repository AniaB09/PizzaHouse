import React from "react";
import './products.css';
import {Card, Button, Row} from 'react-bootstrap';
import CardGroup from "react-bootstrap/CardGroup";

function Products({products, cart, updateCart}) {

    const handleAddToCart = (product) => {
        const newCart = {...cart};
        if (newCart[product.id]) {
            newCart[product.id].quantity += 1;
        } else {
            newCart[product.id] = {...product, quantity: 1};
        }
        updateCart(newCart);
    };

    const calculateTotal = () => {
        return Object.keys(cart).reduce((total, key) => {
            const item = cart[key];
            return total + (item.price * item.quantity);
        }, 0);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <section className='products col-md-8'>
            <h2 className='products-title'>Produkty</h2>
            <Row>
                {products.map(product => (
                    <CardGroup className='col-sm-6' key={product.id}>
                        <Card className='products-card mb-4'>
                            <Card.Img src={product.img}></Card.Img>
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title className='text-nowrap fw-bold'>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                            </Card.Body>
                            <Button variant='success' style={{borderRadius: '0'}} className='text-nowrap' onClick={() => handleAddToCart(product)}>
                                {product.price.toFixed(2)} zł
                            </Button>
                        </Card>
                    </CardGroup>
                ))}
            </Row>
            <Button className='cart-button' size='lg' variant='success' onClick={() => scrollToSection('cart-section')}>
                <span>Koszyk</span>
                <span>{calculateTotal().toFixed(2)} zł</span>
            </Button>
        </section>
    )
}

export default Products;
