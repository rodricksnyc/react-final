import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

import { browserHistory, Router, Route } from 'react-router';
import Canvas from "../components/Canvas";


class Main extends Component {
	state = {
    drawings: [],
    title: String,
    image: String,
		// authenticated: false
	};

	componentDidMount() {
		this.loadDrawings()
	}

	loadDrawings = () => {
		API.getDrawings().then((response) => {
			this.setState({
				drawings: response.data
			})
		}).catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { name, value } = event.target;


		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		const newDrawing = {
			title: this.state.title,
			image: this.state.image
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






	handleDelete = (drawingId) => {
		API.deleteDrawing(drawingId)
			.then(() => {
				this.loadDrawings();
			})
			.catch((e) => {
				console.log(e);
			})
	}

	render() {
		console.log(this.state.drawings)
		const appendShit = () => {
			if(this.state.drawings.length > 0){
					return this.state.drawings.map((drawing) => {
						return (
							<a key={drawing._id} href={"/drawings/" + drawing._id}>
								<img src={drawing.image}/>
							</a>
						)
				})
			} else {
				return (<h3>No Results to Display</h3>)
			}
		}
		return (
			<Container>

				<Row>
					<Col size="md-6">
						<Jumbotron>
							<h1>Drawings</h1>
						</Jumbotron>
						<form>

							<FormBtn onClick={this.handleFormSubmit}>Save Image</FormBtn>
						</form>
					</Col>
					<Col size="md-6 sm-12">
						<Jumbotron>
							<h1>My Drawings</h1>
						</Jumbotron>
						{appendShit()}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Main;
