import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Turtle</th>
                <th>Power</th>
                <th>Remove</th>
            </tr>
        </thead>
    ) 
}

const TableBody = props => {
    const rows = props.turtleData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.role}</td>
                <td><button onClick={() => props.removeTurtle(index)}>Delete</button></td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const { turtleData, removeTurtle } = this.props
        
        return (
            <table>
                <TableHeader />
                <TableBody 
                turtleData={turtleData} 
                removeTurtle={removeTurtle}
                />
            </table>
        )
    }
}

export default Table