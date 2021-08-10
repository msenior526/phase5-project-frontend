import React from "react";
import Article from '../components/Article';

class Articles extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        return fetch('http://localhost:3000/articles')
        .then(resp => resp.json())
        .then(articles => {
            this.setState({
                articles: articles
            })
            console.log(this.state);
        })
    }

    render() {
        const articles = this.state.articles.map((id ,article) => <Article key={id} url={article.url} title={article.title}/>);
        return <div>{articles}</div>
    }
}

export default Articles;