import { useMemo } from "react"
import { useTable } from 'react-table'

export default function NileTraveloguesTable({ ntData }) {
    /**
     * TODO
     * In the database-browser/boat-passengers page, make a request
     * to the backend to get the headers. In the backend, write a utility
     * function that processes the json data from the pscale db. We will pass
     * in that data here so that the table can configure the headers and accessors
     * in the case that the data changes in the future
     */

    // chakra accordian
    // all name, title (set length to 1) in alphabetical order

    const data = useMemo(() => {
        return ntData.map(obj, index => {
            return {
                key: index,
                name: obj.travelers_name,
                title: obj.title,
                summary: obj.summary
            };
        });
    }, [ntData]);

    const columns = useMemo(
        () => [
            {
                Header: 'Traveler Name',
                accessor: 'name'
            },
            {
                Header: 'Title',
                accessor: 'title'
            },
            {
                Header: 'Summary',
                accessor: 'summary'
            }
        ],
        []
    )

    const tableInstance = useTable({ columns, data })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance



    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup, index) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()} key={JSON.stringify(column)}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, index) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()} key={index}>
                            {row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()} key={JSON.stringify(cell)}>
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}