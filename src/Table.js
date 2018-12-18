import React, {Component} from 'react'

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Homer</td>
                        <td>Dad</td>
                    </tr>
                    <tr>
                        <td>Marge</td>
                        <td>Mom</td>
                    </tr>
                    <tr>
                        <td>Bart</td>
                        <td>Brother</td>
                    </tr>
                    <tr>
                        <td>Lisa</td>
                        <td>Sister</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table