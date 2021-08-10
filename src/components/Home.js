import React from "react";

class Home extends React.Component{
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
        return (
            <div><h1>Home!</h1></div>
        )
    }
}

export default Home;