import React from "react";
import './carousel.css';
import Carousel from "react-bootstrap/Carousel";
import {CarouselCaption} from "react-bootstrap";


function OpinionsCarousel() {
    return (
        <section className='carousel'>
            <h2>Dlaczego klienci wybierają naszą pizzerię?</h2>
            <Carousel data-bs-theme='dark'>
                <Carousel.Item>
                    <div className='carousel-background'></div>
                    <CarouselCaption>
                        <p>"Najlepsza pizza, jaką w życiu jadłam!"</p>
                        <h5>Ola</h5>
                    </CarouselCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carousel-background'></div>
                    <CarouselCaption>
                        <p>"Rewelacja! Świeże składniki, a sos wyśmienity!"</p>
                        <h5>Adam</h5>
                    </CarouselCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carousel-background'></div>
                    <CarouselCaption>
                        <p>"Produkty dobrej jakości. Margherita to mój faworyt!"</p>
                        <h5>Ania</h5>
                    </CarouselCaption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default OpinionsCarousel;
