import React, {Component} from 'react'
import Table from './Table'
import Table2 from './Table2'
import Table3 from './Table3'
import Form from './Form'
import Api from './Api'
// import Table4 from './Table4'

class App extends Component {

    // stateables = {
    //     formChars: [
    //         {
    //             'name': 'Leonardo',
    //             'role': 'Leader'
    //         },
    //         {
    //             'name': 'Donatello',
    //             'role': 'Brains'
    //         },
    //         {
    //             'name': 'Raphael',
    //             'role': 'Muscle'
    //         },
    //         {
    //             'name': 'Michaelangelo',
    //             'role': 'Fun'
    //         }
    //     ]
    // }   
    //     removeChars = index => {
    //         const { formChars } = this.state2
           
    //         this.setState({
    //             formChars: formChars.filter((formChars, i) => {
    //                 return i !== index
    //             })
    //         })
    //     }

    handleSubmit = turtle => {
        this.setState({turtles: [...this.state.turtles, turtle]})
    }

    state = {
        turtles: []
    }   
        removeTurtle = index => {
            const { turtles } = this.state
           
            this.setState({
                turtles: turtles.filter((turtle, i) => {
                    return i !== index
                })
            })
        }
    

    render() {
        //const characters acts like an array, which could be imported from a JSON
        const characters = [
            {
                'name': 'Charlie',
                'role': 'Janitor'
            },
            {
                'name': 'Mac',
                'role': 'Bouncer'
            },
            {
                'name': 'Dee',
                'role': 'Aspiring actress'
            },
            {
                'name': 'Dennis',
                'role': 'Bartender'
            }
        ]

        return (
            <div className="container">
                {/* <Table4>
                formCharsData={this.state2.formChars} 
                removeformChars={this.state.removeformChars}
                </Table4>
                <br /> */}
                <h1>Carl Sagan search - Wiki API</h1>
                <Api />
                <br />
                <h1>Table example</h1>
                <h4>Add a Ninja Turtle</h4>
                <Table3 
                turtleData={this.state.turtles} 
                removeTurtle={this.removeTurtle}
                />
                <Form handleSubmit={this.handleSubmit} />
                <br />
                <Table2 characterData={characters} />
                <br />
                <Table />
            </div>
        )
    }
}

export default App
