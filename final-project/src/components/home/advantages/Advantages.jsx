import React from "react";
import './advantages.css';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";

function Advantages() {
    return (
        <section className='advantages'>
            <h2>Co wyróżnia naszą pizzerię?</h2>
            <CardGroup className='d-flex flex-column align-content-center'>
                <Row className='advantages-row mb-4'>
                    <div className='col-md-4 p-0 d-flex justify-content-center align-content-center'>
                        <Card.Img src='https://images.pexels.com/photos/1391490/pexels-photo-1391490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></Card.Img>
                    </div>
                    <Card className='col-md-8 p-2' style={{borderRadius: '0', border: 'none'}}>
                        <Card.Title style={{fontWeight: '700', textAlign: 'left'}}>Świeże składniki</Card.Title>
                        <Card.Text style={{textAlign: 'justify'}}>Nasze dania są przygotowywane wyłącznie ze świeżych składników, które codziennie dostarczane są od sprawdzonych dostawców. Dają one gwarancję wyjątkowego smaku naszych potraw. Aromatyczne zioła, soczyste warzywa i najlepszej jakości wyroby mięsne doskonale komponują się ze świeżym ciastem. Każda pizza w naszym menu to prawdziwa uczta dla podniebienia.</Card.Text>
                    </Card>
                </Row>
                <Row className='advantages-row mb-4'>
                    <Card className='col-md-8 p-2' style={{borderRadius: '0', border: 'none'}}>
                        <Card.Title style={{fontWeight: '700', textAlign: 'left'}}>Produkty z Włoch</Card.Title>
                        <Card.Text style={{textAlign: 'justify'}}>Wiemy, że sekret idealnej pizzy tkwi w najwyższej jakości składnikach. Dlatego też produkty, z których przygotowujemy dania, sprowadzamy bezpośrednio z Włoch. To właśnie one zapewniają naszym klientom niezapomniane doznania kulinarne. Nasze sery, wędliny i oliwy dodają daniom niepowtarzalnego smaku i aromatu. Sprawiają, że goście chcą do nas wracać.</Card.Text>
                    </Card>
                    <div className='col-md-4 p-0 d-flex justify-content-center align-content-center'>
                        <Card.Img src='https://images.pexels.com/photos/10048321/pexels-photo-10048321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></Card.Img>
                    </div>
                </Row>
                <Row className='advantages-row'>
                    <div className='col-md-4 p-0 d-flex justify-content-center align-content-center'>
                        <Card.Img src='https://images.pexels.com/photos/5175613/pexels-photo-5175613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></Card.Img>
                    </div>
                    <Card className='col-md-8 p-2' style={{borderRadius: '0', border: 'none'}}>
                        <Card.Title style={{fontWeight: '700', textAlign: 'left'}}>Idealne ciasto</Card.Title>
                        <Card.Text style={{textAlign: 'justify'}}>Przez lata wypracowaliśmy autorską recepturę na doskonałe ciasto, które zachwyca miękkim, puszystym wnętrzem oraz chrupiącymi brzegami. Po wypieczeniu staje się ono kruche, złociste, gotowe do podania naszym gościom. Nasze idealne ciasto doskonale komponuje się z pozostałymi składnikami gwarantując pełne zadowolenie z każdego spożytego kęsa.</Card.Text>
                    </Card>
                </Row>
            </CardGroup>
        </section>
    )
}

export default Advantages;
