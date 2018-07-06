import React from 'react'
class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            data: []
        }
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.setStateHandler= this.setStateHandler.bind(this)
    };
    setStateHandler()
    {
        var item = "setState..."
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
    };
    forceUpdateHandler()
    {
        this.forceUpdate();
        //render({Math.random()},document.getElementById('root'));
    };
    render()
    {
        return(
            <div>
                <button onClick={this.forceUpdateHandler}>Force update </button>
                <button onClick={this.setStateHandler}>set state</button>
                <h1>State Array :{this.state.data}</h1>
                <h4>Random number: {Math.random()}</h4>
            </div>
        );
    }
}
export default App;
