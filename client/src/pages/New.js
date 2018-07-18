import React, { Component } from "react";
// import Button from "../../components/Button";
import Canvas from "../components/Canvas";
import { Col, Row, Container } from "../components/Grid";
// import Form from "../../components/Form";

class New extends Component {
  state = {
    color: 'blue',
    brushSize: 14
  };







  render() {

    // const sizes = {
    //   smallBrush: 5,
    //   mediumBrush: 10,
    //   largeBrush: 20
    // }


    return (
      <Container>
          <Row>
          	<Col size="lg-8 xl-8 md-12 sm-12 xs-12">
        <Canvas color={this.state.color} brushSize={this.state.brushSize} />
        <button onClick={() => this.setState({color: 'purple'})}>purple</button>
        <button onClick={() => this.setState({color: 'wheat'})}>wheat</button>
        <button onClick={() => this.setState({brushSize: 18})}>18</button>
        <button onClick={() => this.setState({brushSize: 57})}>57</button>

        <br />
        <input type="color" name="color" className="colorSelector"
          onChange={e => {
            this.setState({color: e.target.value})
          }}
        />

        </Col>
        </Row>
      </Container>
    )
  }
}

export default New;
