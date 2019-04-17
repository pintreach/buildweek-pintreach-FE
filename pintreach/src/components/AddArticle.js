import React from 'react';
import axios from 'axios';

class AddArticle extends React.Component {
	constructor() {
		super();
		this.state = {
			img: '',
			title: '',
			url: '',
			user_id: null
		};
	}
	addArticle = (e) => {
    const token = localStorage.getItem('authorization');
    const id = localStorage.getItem('id');
		e.preventDefault();
		axios
			.post(
				'https://pintereach-buildweek.herokuapp.com/articles',
				{
					title: this.state.title,
					img: this.state.img,
					user_id: id,
					url: this.state.url
				},
				{
					headers: { 'authorization': token }
				}
			)
			.then((res) => {
				console.log(res.status, res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<div className="Forms">
				<h3>Add New Article</h3>
				<form onSubmit={this.addArticle}>
					<input
						type="text"
						name="img"
						value={this.state.img}
						onChange={this.handleChange}
						placeholder="img"
					/>
					<input
						type="text"
						name="title"
						value={this.state.title}
						onChange={this.handleChange}
						placeholder="title"
					/>
					<input
						type="text"
						name="url"
						value={this.state.url}
						onChange={this.handleChange}
						placeholder="url"
					/>
					<button onClick={this.addArticle}>Add new article</button>
				</form>
			</div>
		);
	}
}

export default AddArticle;
