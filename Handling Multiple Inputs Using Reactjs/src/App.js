import React from 'react'
export class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={name_state: '',
            application_number_state: ''};
        this.updatenameState=this.updatenameState.bind(this);
        this.updateapplicationstate=this.updateapplicationstate.bind(this);
    };
    componentWillUpdate()
    {

    }

    updatenameState(e)
    {
        this.setState({name_state: e.target.value
                        });
    }
    updateapplicationstate(e)
    {
        this.setState({application_number_state: e.target.value});
    }
    render()
    {
        return(
            <div>
               Name:<input type = 'text' value={this.state.name_state} placeholder='enter the name' onChange={this.updatenameState} /><br />
                Application Number <input type= 'text' value={this.state.application_number_state} placeholder="enter the application number" onChange ={this.updateapplicationstate} />
                <p>
                <br />
                    <hr />

                    the Name is  {this.state.name_state} <br /> the application number is {this.state.application_number_state}
                </p>
            </div>
        );
    }
}

export default App;
