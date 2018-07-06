import React from 'react'
import ReacDOM from 'react-dom'

class App extends React.Component
{
    constructor()
    {
        super();
        this.state={
            data:[{
                    component: 'Samala',
                    id: 1
                },
                {
                    component: 'Satish',
                    id: 2
                },
                {
                    component: 'kumart',
                    id: 3
                }
            ]
        }
    }
    render()
    {
        return(
            <div>
                {this.state.data.map((object,i) => <Content objectName={object} />)}
            </div>
        );
    }

}
class Content extends React.Component
{
    render()
    {
        return(
            <div style={{color:'red'}}>
                the name is {this.props.objectName.component} <br />
                and the id is {this.props.objectName.id} <br />
                {/*and the key is {this.props.key}*/}
            </div>
        );
    }
}

export default App;
