import React from "react";
import Articles from '../containers/Articles';

class Home extends React.Component{
 
    render() {
        return (
            <div>
                <h1>Home!</h1>
                <Articles />
            </div>
        )
    }
}

export default Home;