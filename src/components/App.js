import React from 'react';

class App extends React.Component {
    state={resource: 'post'}
    render() {
        return (
        <div>
            <div>
                <button onClick={()=> this.setState({resource: 'Posts'})}>Posts</button>
                <button onClick={()=> this.setState({resource: 'Todos'})}>ToDo</button>
            </div>
            {this.state.resource}
        </div>
        );
    };
};

export default App;
