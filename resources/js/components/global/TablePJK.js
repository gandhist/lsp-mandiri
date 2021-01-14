import React, { Fragment, useState, useEffect, useRef } from 'react';
import $ from 'jquery'
// import '../../../css/jquery.dataTables.css';

// require( 'datatables.net' )( window, $ );
$.DataTable = require('datatables.net-bs');

const TablePJK = ({ data }) => {

    // const [data, setData] = useState({data})
    const table = useRef()

    useEffect(() => {
        const $el = $(table.current)

        $el.DataTable({
            data: data,
            columns: [
                { title: "Name" },
                { title: "Position" },
                { title: "Office" },

                { title: "Extn." },
                { title: "Start date" },
                { title: "Salary" }
            ]
        })
    }, [])

    return (
        <Fragment>
            <table ref={ table } style={{width: '100%'}} className="table table-striped table-bordered dataTable customTable">
            </table>
        </Fragment>
    )
}

export default TablePJK;
