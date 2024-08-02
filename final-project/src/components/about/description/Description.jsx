import React from 'react';
import './description.css';
import Card from "react-bootstrap/Card";

function Description() {
    return (
        <section className='description'>
            <h1>Kilka słów o nas</h1>
            <Card style={{border: 'none'}}>
                <Card.Text className='fs-5' style={{fontStyle: "italic"}}>
                    W PizzaHouse pasja do włoskiej kuchni spotyka się z wyjątkową atmosferą!
                    Nasza pizzeria to idealne miejsce dla miłośników doskonałej pizzy, świeżych składników,
                    przyjemnego spędzania czasu w towarzystwie bliskich.
                    W PizzaHouse wierzymy, że prawdziwa pizza powinna być nie tylko smaczna, ale także przygotowywana z sercem.
                    Dlatego korzystamy wyłącznie z najwyższej jakości składników.
                    Nasze ciasto jest wyrabiane według tradycyjnej receptury, a składniki pochodzą od zaufanych, sprawdzonych dostawców.
                    Każda pizza jest pieczona w piecu opalanym drewnem, przez co zyskuje ona niepowtarzalny smak i aromat.
                    Nasza pizzeria to miejsce, które łączy nowoczesny design z włoską tradycją.
                    Przytulne wnętrze, ciepłe oświetlenie, przyjazny personel sprawią, że poczujesz się jak w sercu Włoch.
                    Odwiedź nas i odkryj, jak smakuje prawdziwa włoska pizza!
                </Card.Text>
            </Card>
            <Card style={{border: 'none'}}>
                <Card.Title className='fs-2 fw-semibold' style={{color: 'firebrick'}}>Bądź na bieżąco!</Card.Title>
                <div className='mt-2'>
                    <a href='https://www.facebook.com' target='_blank'><Card.Img className='social-media-icons mr-3' src='https://www.svgrepo.com/show/299471/facebook.svg'></Card.Img></a>
                    <a href='https://www.instagram.com' target='_blank'><Card.Img className='social-media-icons' src='https://www.svgrepo.com/show/299481/instagram.svg'></Card.Img></a>
                </div>
            </Card>
        </section>
    )
}

export default Description;
