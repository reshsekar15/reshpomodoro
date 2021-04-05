import 'bootstrap/dist/css/bootstrap.min.css';
//just installing react bootstrap isn't enough. Must add the above line to identify the css
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button, Tabs, Tab, Sonnet, Jumbotron, Nav, Link, NavLink, Collapse, Navbar, NavDropdown } from 'react-bootstrap'
import { Card, Row, Col, Modal, ModalBody, ModalFooter, ModalDialog, Alert, ProgressBar} from 'react-bootstrap'


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

class StopWatch extends React.Component {
    render() {
        return (

            <>
                
            </>
            )
        
    }
}

//passing in props here from CardSelect component 
class ShowTimer extends React.Component {
    render() {
        console.log("entered")
        console.log(this.props.basictimer)
        console.log(this.props.customtimer)
        if (!this.props.basictimer & !this.props.customtimer) {
            return (
                <>

                </>
            )
        }
        else if (this.props.basictimer) {
            return (
                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col> </Col>
                        <Card> 
                            
                            <Card.Body> 
                                <Card.Title> Basic Timer </Card.Title>
                                <p> Displaying stop watch </p>
                            </Card.Body>
                        </Card>
                        <Col> </Col>
                    </Row>
                </div>
            )
        }
        else if (this.props.customtimer) {
            return (
                <div>
                    <h1> This is  a custom timer </h1>
                </div>
            )
        }
        else {
            <>
            </>
        }
    }
          
       
}

class CardSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basictimer: false, 
            customtimer: false
        };
    }
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
                                    Already know what activity you would like to work on? 
                                    Start the timer and get ready to rock!

    </Card.Text>
                                <Button variant="primary" onClick={() => this.setState({basictimer: true, customtimer: false})}>Start Timer</Button>
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
                                <Button variant="primary" onClick={() => this.setState({customtimer: true, basictimer: false})}> Random activity selector</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
                <Row>
                    <Col> </Col>
                    <ShowTimer basictimer={this.state.basictimer} customtimer={this.state.customtimer} />
                    <Col> </Col>
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
