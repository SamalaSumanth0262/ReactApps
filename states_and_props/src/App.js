import React from 'react'
class App extends  React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            header: 'im coming from header state',
            content: 'im coming from content state'        }
    }
    render()
    {
        return(
            <div>
                <Header headerProp={this.state.header}/>
                <Content  contentProp={this.state.content}/>
            </div>
        );
    }

}
class Header extends React.Component
{
    render()
    {
        return(
            <h1>im in header component and {this.props.headerProp}</h1>
        );
    }
}
class Content extends React.Component
{
    render()
    {
        return(
            <h1>im in Content Component and {this.props.contentProp}</h1>
        );
    }
}

export default App;
