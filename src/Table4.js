import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Hero/Villain</th>
            </tr>
        </thead>
    ) 
}

const TableBody = props => {
    const rows = props.formCharsData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.role}</td>
                <td><button onClick={() => props.removeformChars(index)}>Delete</button></td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const { formCharsData, removeformChars } = this.props
        
        return (
            <table>
                <TableHeader />
                <TableBody 
                fomCharsData={formCharsData} 
                removefomChars={removeformChars}
                />
            </table>
        )
    }
}

export default Table