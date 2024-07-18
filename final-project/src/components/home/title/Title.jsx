import React from 'react';
import Image from 'react-bootstrap/Image';
import './title.css';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

function Title() {
    return (
        <section className='title-section'>
            <h1>Kawałek Włoch w centrum Wrocławia</h1>
            <Image className='main-img' src='https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' fluid></Image>
            <Link to='/order'>
                <Button variant='success' size='lg' className='order-button img-fluid text-nowrap'>Zamów online</Button>
            </Link>
        </section>
    )
}

export default Title;
