import React, { Component } from "react";
// import Button from "../../components/Button";
import Canvas from "../components/Canvas";
import { Col, Row, Container } from "../components/Grid";
// import Form from "../../components/Form";
import API from '../utils/API'

class New extends Component {
  state = {
    color: 'blue',
    brushSize: 14,
    drawings: [],
    selectedDrawing: undefined
  }

  handleFormSubmit = event => {
    event.preventDefault()
		const newDrawing = {
			title: this.state.title,
			image: document.getElementById('drawingCanvas').toDataURL()
		}
    API.updateDrawing(this.state.selectedDrawing._id, newDrawing)
      .then(res => {
        this.setState({
          id: "",
          title: "",
          image: ""
        })

        //this.updateDrawings()
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
  componentDidMount(){
    this.loadDrawings();
  }
  componentWillMount(){
    setTimeout(() => {
      if(this.state.drawings.length > 0){
        this.state.drawings.forEach((drawing) => {
          if(drawing._id === this.props.match.params.id){
            this.setState({
              selectedDrawing: drawing
            })
          }
        })
      }
    }, 500)
  }

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
        <Canvas selectedDrawing={this.state.selectedDrawing} color={this.state.color} brushSize={this.state.brushSize} />
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

        <button onClick={this.handleFormSubmit}> save it</button>
      </Container>
    )
  }
}

export default New;
