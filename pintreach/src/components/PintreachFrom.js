import React from 'react';
import axios from 'axios';
import PintreachList from './PintreachList';
import './Pintreach.css';

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

	deletePintreach = (e) => {
		e.preventDefault();
		this.deletePintreach('');
	};

	render() {
		return (
			<div className="pintreachForm">
				<div className="Forms">
					<form onSubmit={this.addPintreach}>
						<input
							type="text"
							value={this.state.img}
							pin="pin"
							onChange={this.handleChanges}
							placeholder="img"
						/>
						<input
							type="text"
							value={this.state.title}
							pin="pin"
							onChange={this.handleChanges}
							placeholder="title"
						/>
						<input
							type="text"
							value={this.state.url}
							pin="pin"
							onChange={this.handleChanges}
							placeholder="url"
						/>
						<button type="">Add new article</button>
					</form>
					<form onSubmit={this.deletePintreach}>
						<input
							type="text"
							value={this.state.title}
							pin="pin"
							onChange={this.handleChanges}
							placeholder="Delete Article"
						/>
						<button type="">Delete </button>
					</form>
				</div>
				<div className="pintreachList">
          {this.state.articles.map(article=>
            <PintreachList key={article.id} article={article} />)}
				</div>
			</div>
		);
	}
}

export default PintreachForm;
