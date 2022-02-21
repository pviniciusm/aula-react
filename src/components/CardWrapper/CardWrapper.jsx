import { Card } from "../Card/Card"
import './style.css';

export const CardWrapper = () => {
    return (
        <div className="wrapper">
            <Card rounded titulo="Titulo do card com param">
                <strong>Este é o texto do meu card</strong>
            </Card>

            <Card titulo="Titulo 1" texto="Este é o texto do meu card">
                <strong>Este é o texto do meu card</strong>
            </Card> 

            <Card titulo="Titulo 2" texto="Aula React">
                <strong>Este é o texto do meu card</strong>
            </Card> 

            <Card rounded titulo="Titulo 3" texto="Este é o texto do meu card">
                <strong>Este é o texto do meu card</strong>
            </Card>
        </div>
    )
}
