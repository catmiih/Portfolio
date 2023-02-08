import { Container } from "react-bootstrap"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

export function WhoAmI() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className="mb-5">
                            <img src="https://avatars.githubusercontent.com/u/65616960" className="rounded-full" alt="Waiting..." />
                        </div>
                    </Col>
                    <Col sm={5} className="">
                        <div className="text-white">
                            <h1 className="mb-10">Muito prazer!</h1>
                            <p>
                                Meu nome é Emily, tenho 17 anos e atualmente estou me formando em Análise e desenvolvimento de Sistemas! Nasci em 7 de março de 2005 e meu amor por tecnologia começou quando eu era bem nova e adorava passar horas e horas jogando videogame ou usando o computador, e em 2012, que foi quando surgiu uma oportunidade, comecei um curso básico em informática, que foi a chave para eu me tornar a pessoa que sou hoje.
                                <br /><br />
                                O tempo passou e meu amor por tecnologia aumentou ainda mais, e no fim de 2019 decidi prestar vestibular para entrar na Etec em Desenvolvimento de Sistemas com mentoria especial da IBM. Em 2021 decidi ingressar no mercado de trabalho e comecei a atuar como desenvolvedora FrontEnd para a Hackersec, onde com o decorrer do tempo adquiri habilidades em cibersegurança e migrei para a área de Infraestrutura. No momento estou ingressando ao meu ensino superior de Análise e desenvolvimento de sistemas pela Fatec Zona Leste, integrado ao programa P-TECH da IBM.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}