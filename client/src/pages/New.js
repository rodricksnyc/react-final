import React, { Component } from "react";
// import Button from "../../components/Button";
import Canvas from "../components/Canvas";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
// import Form from "../../components/Form";
import API from '../utils/API'

class New extends Component {
  state = {
    color: 'blue',
    brushSize: 14,
    drawings: []
  }

  handleFormSubmit = event => {
    event.preventDefault()
		const newDrawing = {
			title: this.state.title,
			image: document.getElementById('drawingCanvas').toDataURL()
		}

		API.saveDrawing(newDrawing)
			.then(res => {
				this.setState({
					title: "",
					image: ""
				})

				this.loadDrawings()
			})
			.catch(e => {
				console.log(e);
			})
	}
  loadDrawings = () => {
    API.getDrawings().then((response) => {
      this.setState({
        drawings: response.data
      })
    }).catch(err => console.log(err));
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
            <Jumbotron addClass="header">
          	<h1>My Pixel App	<i class="fas fa-paint-brush"></i></h1>
            </Jumbotron>
          <Col size="lg-10 md-12 xs-12">
              <Canvas color={this.state.color} brushSize={this.state.brushSize} />
          </Col>

      	<Col size="lg-2 md-12 xs-12">
        <p style={{fontSize:"50px"}}>Tools</p>
        <p style={{fontSize:"30px"}}>Color</p>
        <input type="color" name="color" className="colorSelector"
          onChange={e => {
            this.setState({color: e.target.value})
          }}
        />
        <br/><br/>
        <p style={{fontSize:"30px", color:'black'}}>Brush Size</p>
        <button style={{width:"120px", background:'#ff66ff', color:'black', borderRadius:'5px', fontSize:"24px", fontFamily: 'Permanent Marker', marginBottom:'10px'}} onClick={() => this.setState({brushSize: 5})}>Small</button>
        <br/>
        <button style={{width:"120px", background:"#ffb3d9", color:'black', borderRadius:'5px', fontSize:"24px", fontFamily: 'Permanent Marker', marginBottom:'10px'}} onClick={() => this.setState({brushSize: 10})}>Medium</button>
        <br/>
        <button style={{width:"120px", background:'#ff6699', color:'black', borderRadius:'5px', fontSize:"24px", fontFamily: 'Permanent Marker', marginBottom:'10px'}} onClick={() => this.setState({brushSize: 25})}>Large</button>
        <br/><br/>
        <button onClick={this.handleFormSubmit}>Save Drawing</button>
        </Col>
        </Row>

      </Container>
    )
  }
}

export default New;
