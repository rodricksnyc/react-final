
// import Button from "../../components/Button";
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

import Canvas from "../components/Canvas";


class Main extends Component {
	state = {
    title: String,
    image: String
	};

	componentDidMount() {
		this.loadDrawings();
	}

	loadDrawings = () => {
		API.getDrawings()
			.then(response => this.setState({ drawings: response.data }))
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		// Pull the name and value properties off of the event.target (the element which triggered the event)
		const { name, value } = event.target;

		// Set the state for the appropriate input field
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
		return (
			<Container fluid>
				<Row>
					<Col size="md-6">
						<Jumbotron>
							<h1>Drawings</h1>
						</Jumbotron>
						<form>
							<Input onChange={this.handleInputChange} value={this.state.title} name="title" placeholder="Title (required)" />
							<Input value={this.state.image} onChange={this.handleInputChange} name="image" placeholder="Image (required)" />
							<FormBtn onClick={this.handleFormSubmit}>Save Image</FormBtn>
						</form>
					</Col>
					<Col size="md-6 sm-12">
						<Jumbotron>
							<h1>My Drawings</h1>
						</Jumbotron>
						{this.state.drawings.length ? (
							<List>
								{this.state.drawings.map(drawing => (
									<ListItem key={drawing._id}>
										<a href={"/drawings/" + drawing._id}>
											<strong>
												{drawing.title} by {drawing.image}
											</strong>
										</a>
										<DeleteBtn onClick={this.handleDelete(drawing._id)} />
									</ListItem>
								))}
							</List>
						) : (
							<h3>No Results to Display</h3>
						)}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Main;
