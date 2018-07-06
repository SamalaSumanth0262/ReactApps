import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom';
class App extends React.Component
{
    render(){
        return(
            <div>
                <h1>hellow,{this.props.name}</h1>
                <h3>array : {this.props.propArray}</h3>
                <h3>Bool : {this.props.propBool ? "true": "false"}</h3>
            </div>
        );
    }
}
App.propTypes={
    name: PropTypes.string,
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired
};
App.defaultProps={
    name:"sumanth",
    propArray: [1,2,3,4,5,6],
    propBool:true
};
export default App;
