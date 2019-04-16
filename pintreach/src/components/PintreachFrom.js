import React from 'react';
import axios from 'axios';
import PintreachList from './PintreachList';
class PintreachForm extends React.Component {
	constructor() {
		super();
		this.state = {
			articles: []
		};
	}
	componentDidMount() {
		axios
			.get('https://pintereach-buildweek.herokuapp.com/articles')
			.then((res) => {
				console.log(res.data);
				this.setState({ articles: res.data });
				console.log(this.state);
			})
			.catch((err) => {
				throw new Error(err);
			});
	}
	addPintreach = (e) => {
		const item = {
			img: '',
			title: '',
			url: '',
			userid: ''
		};
		axios
			.post('https://pintereach-buildweek.herokuapp.com/articles', item)
			.then((res) => {
				this.setState({
					addPintreachSuccess: res.data
				});
			})
			.catch((err) => {
				throw new Error(err);
			});
	};

	deletePintreach = (id) => {
		axios
			.delete(`https://pintereach-buildweek.herokuapp.com/articles ${id}`)
			.then((res) => {
				this.setState({
					deletePintreach: res.data
				});
			})
			.catch((err) => {
				throw new Error(err);
			});
	};
	handleChanges = (e) => {
		this.setState({ articles: e.target.value });
	};

	addPintreach = (e) => {
		e.preventDefault();
		this.addPintreach(this.state.articles);
	};

	deletePintreach = (e) => {
		e.preventDefault();
		this.deletePintreach('');
	};

	render() {
		return (
			<div>
				<div>
					<PintreachList articles={this.state.articles} /> )}/>
				</div>
				<form onSubmit={this.addPintreach}>
					<input
						type="text"
						value={this.state.img}
						pin="pin"
						onChange={this.handleChanges}
						placeholder="Pintreach"
					/>
					<button type="">Add new page</button>
				</form>
				<form onSubmit={this.deletePintreach}>
					<input
						type="text"
						value={this.state.title}
						pin="pin"
						onChange={this.handleChanges}
						placeholder="Delete"
					/>
					<button type="">Delete page</button>
				</form>
			</div>
		);
	}
}

export default PintreachForm;
