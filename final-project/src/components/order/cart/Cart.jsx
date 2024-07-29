import React, {useState} from "react";
import './cart.css';
import {ListGroup, Button, Modal, Form} from 'react-bootstrap';
import {supabase} from "../../../supabase.js";

const Cart = ({cart, updateCart}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [street, setStreet] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setStreet('');
        setApartmentNumber('');
        setPostalCode('');
        setCity('');
    };

    const handleIncrease = (id) => {
        const newCart = { ...cart };
        newCart[id].quantity += 1;
        updateCart(newCart);
    };

    const handleDecrease = (id) => {
        const newCart = { ...cart };
        if (newCart[id].quantity > 1) {
            newCart[id].quantity -= 1;
        } else {
            delete newCart[id];
        }
        updateCart(newCart);
    };

    const calculateTotal = () => {
        return Object.keys(cart).reduce((total, key) => {
            const item = cart[key];
            return total + (item.price * item.quantity);
        }, 0);
    };

    const placeOrder = async () => {
        if (!street || !postalCode || !city) {
            alert('Proszę wprowadzić wszystkie wymagane dane adresowe.');
            return;
        }

        const products = Object.keys(cart).map(key => ({
            name: cart[key].name,
            price: cart[key].price,
            quantity: cart[key].quantity
        }));

        const { data: productData, error: productError } = await supabase
            .from('products')
            .insert(products);

        const { data: addressData, error: addressError } = await supabase
            .from('address')
            .insert([{
                street,
                apartment_number: apartmentNumber,
                postal_code: postalCode,
                city
            }]);

        if (productError || addressError) {
            alert('Wystąpił błąd podczas składania zamówienia.');
            console.error(productError, addressError);
            return;
        }

        alert('Zamówienie złożone pomyślnie!');
        handleCloseModal();
        updateCart({});
    };

    return (
            <section className='col-md-4' id='cart-section'>
                <div className='cart-container col-md-3'>
                    <h2 className='cart-title'>Koszyk</h2>
                    <ListGroup className='products-list'>
                        {Object.keys(cart).map(key => (
                            <ListGroup.Item key={key} className="d-flex justify-content-between align-items-center p-1">
                                <div>{cart[key].name}</div>
                                <div className='d-flex justify-content-center'>
                                    <Button variant="danger" size='sm' className='fw-bold mr-2' style={{borderRadius: '0'}} onClick={() => handleDecrease(key)}>-</Button>
                                    <span className='mr-2'>{cart[key].quantity}</span>
                                    <Button variant="success" size='sm' className='fw-bold' style={{borderRadius: '0'}} onClick={() => handleIncrease(key)}>+</Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                        <Button style={{borderRadius: '0'}} className='d-flex justify-content-between align-items-center' onClick={handleOpenModal} variant="success">
                            <span>Zamów</span>
                            <span>{calculateTotal().toFixed(2)} zł</span>
                        </Button>

                        <Modal size='lg' show={isModalOpen} onHide={handleCloseModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Adres dostawy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formStreet">
                                        <Form.Label>Ulica</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Wpisz ulicę"
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formApartmentNumber">
                                        <Form.Label>Nr lokalu</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Wpisz nr lokalu"
                                            value={apartmentNumber}
                                            onChange={(e) => setApartmentNumber(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formPostalCode">
                                        <Form.Label>Kod pocztowy</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Wpisz kod pocztowy"
                                            value={postalCode}
                                            onChange={(e) => setPostalCode(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formCity">
                                        <Form.Label>Miejscowość</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Wpisz miejscowość"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button style={{borderRadius: '0'}} variant="secondary" onClick={handleCloseModal}>Zamknij</Button>
                                <Button style={{borderRadius: '0'}} variant="success" onClick={placeOrder}>Złóż zamówienie</Button>
                            </Modal.Footer>
                        </Modal>
                    </ListGroup>
                </div>
            </section>
    );
};

export default Cart;
