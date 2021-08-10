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
            }, () => console.log(this.state))
        })
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.state.articles.map(article => <li><Article key={article.id} url={article.url} title={article.title}/></li>)}
                </ul>
            </div>
        )
    }
}

export default Articles;