import React from "react";
import './opening-hours.css';
import Card from "react-bootstrap/Card";

function OpeningHours() {
    return (
        <section className='opening-hours'>
            <Card className='opening-hours-card'>
                <Card.Body>
                    <Card.Title className='fs-1 fw-semibold' style={{marginBottom: '20px', color: 'firebrick'}}>Godziny otwarcia</Card.Title>
                    <h6 className='fs-4 fw-semibold'>poniedziałek:</h6>
                    <p className='fs-5'>nieczynne</p>
                    <h6 className='fs-4 fw-semibold text-nowrap'>wtorek - piątek:</h6>
                    <p className='fs-5'>12:00 - 23:00</p>
                    <h6 className='fs-4 fw-semibold text-nowrap'>sobota - niedziela:</h6>
                    <p className='fs-5'>13:00 - 24:00</p>
                </Card.Body>
            </Card>
        </section>
    )
}

export default OpeningHours;
