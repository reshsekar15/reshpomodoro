import 'bootstrap/dist/css/bootstrap.min.css';
//just installing react bootstrap isn't enough. Must add the above line to identify the css
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button, Tabs, Tab, Sonnet, Jumbotron, Nav, Link, NavLink, Collapse, Navbar, NavDropdown } from 'react-bootstrap'
import { Card, Row, Col} from 'react-bootstrap'



class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/* TODO */}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
class PamodoroNavbar extends React.Component {

    render() {
        return (
            <>
            <Navbar collapseOnSelect expand = "lg" bg = "primary" variant = "dark" fixed="top">
                <Navbar.Brand href="#home">Pomodoro</Navbar.Brand>
               
                </Navbar>
                <br /> 
                <br />
            <PamodoroHeader />
            </>
        );
    }
}
class PamodoroHeader extends React.Component {
    render() {
        return (
            <>
            <Navbar className="primary">
                Say No! to procastination
            </Navbar>
                <CardSelect />
            </>
            );
    }
}

class CardSelect extends React.Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col> </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Start Timer</Card.Title>
                                <Card.Text>
                                    Already know what activity you would like to work on? Start the timer and get ready
    </Card.Text>
                                <Button variant="primary">Start Timer</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Random activity selector</Card.Title>
                                <Card.Text>
                                    Do you like to cherry pick what you want to work on further procastinating activities that don't
                                    interest you? 
    </Card.Text>
                                <Button variant="primary"> Random activity selector</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </div>);

    }

}
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <PamodoroNavbar />,
    document.getElementById('root')
);
