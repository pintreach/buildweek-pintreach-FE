import React from 'react';
import axios from 'axios';
import PintreachList from './PintreachList';
import './Pintreach.css';
import AddArticle from './AddArticle';

class PintreachForm extends React.Component {
	constructor() {
		super();
		this.state = {
			articles: []
		};
	}
	componentDidMount() {
		// const {id} = this.props.match.params;
		axios
			.get(`https://pintereach-buildweek.herokuapp.com/articles/`)
			.then((res) => {
				console.log(res.data);
				this.setState({ articles: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	deleteArticle = (id) => {
		axios
			.delete(`https://pintereach-buildweek.herokuapp.com/articles/${id}`)
			.then((res) => {
				console.log(res.status);
				this.setState({ articles: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div className="pintreachForm">
				<AddArticle />
				<div className="pintreachList">
					{this.state.articles.map((article) => (
						<PintreachList deleteArticle={this.deleteArticle} key={article.id} article={article} />
					))}
				</div>
			</div>
		);
	}
}

export default PintreachForm;
