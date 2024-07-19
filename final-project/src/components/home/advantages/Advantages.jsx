import React from "react";
import './advantages.css';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

function Advantages() {
    return (
        <section className='col-md-12 advantages'>
            <h2>Co wyróżnia naszą pizzerię?</h2>
            <Row className='advantages-row'>
                <Card className='col-md-6 advantages-card'>
                    <Card.Img className='advantages-img' src='https://images.pexels.com/photos/1391490/pexels-photo-1391490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></Card.Img>
                </Card>
                <Card className='col-md-6 advantages-card advantages-description'>
                    <Card.Title className='advantages-title'>Świeże składniki</Card.Title>
                    <Card.Text className='advantages-text'>Nasze dania są przygotowywane wyłącznie ze świeżych składników, które codziennie dostarczane są od sprawdzonych dostawców. Dają one gwarancję wyjątkowego smaku i aromatu naszych potraw. Aromatyczne zioła, soczyste warzywa i najlepszej jakości wyroby mięsne doskonale komponują się ze świeżym ciastem. Każda pizza w naszym menu to prawdziwa uczta dla podniebienia.</Card.Text>
                </Card>
            </Row>
            <Row className='advantages-row' style={{marginTop: '20px'}}>
                <Card className='col-md-6 advantages-card advantages-description'>
                    <Card.Title className='advantages-title'>Produkty z Włoch</Card.Title>
                    <Card.Text className='advantages-text'>Wiemy, że sekret idealnej pizzy tkwi w najwyższej jakości składnikach. Dlatego produkty, z których przygotowujemy nasze dania, sprowadzamy bezpośrednio z Włoch. To właśnie one zapewniają naszym klientom niezapomniane doznania kulinarne. Nasze sery, wędliny, pomidory i oliwy dodają daniom niepowtarzalnego smaku i aromatu.</Card.Text>
                </Card>
                <Card className='col-md-6 advantages-card'>
                    <Card.Img className='advantages-img' src='https://images.pexels.com/photos/10048321/pexels-photo-10048321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></Card.Img>
                </Card>
            </Row>
            <Row className='advantages-row' style={{marginTop: '20px'}}>
                <Card className='col-md-6 advantages-card'>
                    <Card.Img className='advantages-img' src='https://images.pexels.com/photos/5175613/pexels-photo-5175613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></Card.Img>
                </Card>
                <Card className='col-md-6 advantages-card advantages-description'>
                    <Card.Title className='advantages-title'>Idealne ciasto</Card.Title>
                    <Card.Text className='advantages-text'>Przez lata wypracowaliśmy autorską recepturę na doskonałe ciasto, które zachwyca miękkim i puszystym wnętrzem oraz chrupiącymi brzegami. Po wypieczeniu staje się kruche i złociste, gotowe do padania naszym klientom. Nasze idealne ciasto doskonale komponuje się z pozostałymi składnikami i gwarantuje pełne zadowolenie z każdego kęsa.</Card.Text>
                </Card>
            </Row>
        </section>
    )
}

export default Advantages;
