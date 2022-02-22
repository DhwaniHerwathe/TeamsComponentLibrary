import React from 'react';
import { useTable, usePagination } from 'react-table';

import "./Table.css";

export interface TableProps {
}


const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData // This is a custom function that we supplied to our table instance
  }) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue);
  
    const onChange = (e) => {
      setValue(e.target.value);
    };
  
    // We'll only update the external data when the input is blurred
    const onBlur = () => {
      updateMyData(index, id, value);
    };
  
    // If the initialValue is changed external, sync it up with our state
    React.useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);
  
    return <input value={value} onChange={onChange} onBlur={onBlur} />;
  };
  
  // Set our editable cell renderer as the default Cell renderer
  const defaultColumn = {
    Cell: EditableCell
  };

// Table component
const Table = ({ columns, data, updateMyData, skipPageReset}) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable({
    columns,
    data,
    defaultColumn,
    autoResetPage: !skipPageReset,
    updateMyData
  },
//   useSortBy,
  usePagination
  )

  // Render the UI for your table
  return (
      <>
    <table  {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    
    {/* Pagination Implementation */}
    <div className="pagination" >
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

// Main Root Component
export const TableStruct : React.FC<TableProps> = () => {

    //dataValue via props
    const dataValue = [{
        "age": 1,
        "firstName": "apple",
        "lastName": "orange",
        "progress": 80,
        "status": "inCart",
        "subRows": undefined,
        "visits": 35
      },
      {
        "age": 2,
        "firstName": "kiwi",
        "lastName": "mango",
        "progress": 80,
        "status": "inCart",
        "subRows": undefined,
        "visits": 35
      },
      {
        "age": 3,
        "firstName": "kiwi",
        "lastName": "mango",
        "progress": 80,
        "status": "inCart",
        "subRows": undefined,
        "visits": 35
      },
      {
        "age": 4,
        "firstName": "kiwi",
        "lastName": "mango",
        "progress": 80,
        "status": "inCart",
        "subRows": undefined,
        "visits": 35
      },
      {
        "age": 5,
        "firstName": "kiwi",
        "lastName": "mango",
        "progress": 80,
        "status": "inCart",
        "subRows": undefined,
        "visits": 35
      },
      {
        "age": 6,
        "firstName": "kiwi",
        "lastName": "mango",
        "progress": 80,
        "status": "inCart",
        "subRows": undefined,
        "visits": 35
      },
      {
        "age": 7,
        "firstName": "kiwi",
        "lastName": "mango",
        "progress": 80,
        "status": "inCart",
        "subRows": undefined,
        "visits": 35
      },
      {
        "age": 8,
        "firstName": "kiwi",
        "lastName": "mango",
        "progress": 80,
        "status": "inCart",
        "subRows": undefined,
        "visits": 35
      },
      {
        "age": 9,
        "firstName": "kiwi",
        "lastName": "mango",
        "progress": 80,
        "status": "inCart",
        "subRows": undefined,
        "visits": 35
      },
      {
        "age": 10,
        "firstName": "kiwi",
        "lastName": "mango",
        "progress": 80,
        "status": "inCart",
        "subRows": undefined,
        "visits": 35
      },
      {
        "age": 11,
        "firstName": "potato",
        "lastName": "mango",
        "progress": 80,
        "status": "inCart",
        "subRows": undefined,
        "visits": 35
      },
      {
        "age": 12,
        "firstName": "tomato",
        "lastName": "mango",
        "progress": 80,
        "status": "inCart",
        "subRows": undefined,
        "visits": 35
      }
      ];
      const [data, setData] = React.useState(dataValue);

      //Table Headers
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          }
        ]
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Quantity',
            accessor: 'progress',
          },

          // Delete Functionality
          {
            Header: 'Delete',
            id: 'delete',
            accessor: (str) => 'delete',
  
        Cell: (tableProps) => (
          <span style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}
            onClick={() => {
              // ES6 Syntax use the rvalue if your data is an array.
              const dataCopy = [...data];
              // It should not matter what you name tableProps. It made the most sense to me.
              dataCopy.splice(tableProps.row.index, 1);
              setData(dataCopy);
            }}>
           Delete
          </span>
        ),
      },
        ]
      }
    ],
    [data]
  );


  const [originalData] = React.useState(data);
  const [skipPageReset, setSkipPageReset] = React.useState(false);

console.log(data);
  const updateMyData = (rowIndex, columnId, value) => {
    // flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value
          };
        }
        return row;
      })
    );
  };

  React.useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  const resetData = () => setData(originalData);

  return (
    <div>
         <button onClick={resetData}>Reset Data</button>
        <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
        />
  
    </div>
  )
}

