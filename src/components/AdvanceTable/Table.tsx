import React from 'react';
import { useTable, usePagination, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy } from 'react-table';

import "./Table.css";


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


//global filter for search

const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (

    <span>
      Search: {''}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>

  )
}


// Table component

const Table = ({ columns, data, updateMyData, skipPageReset }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    state,
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
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize }
  } = useTable({
    columns,
    data,
    defaultColumn,
    autoResetPage: !skipPageReset,
    updateMyData,
  },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  )

  // Render the UI for your table
  // sorting implementation 
  // global filter function inclusion 
  return (
    <>
      <table  {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              style={{
                textAlign: 'left',
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
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
export const TableStruct: React.FC<TableProps> = () => {

  //dataValue via props

  const dataValue = [{
    "eid": 1,
    "firstName": "rohit",
    "lastName": "ram",
    "progress": 80,
    "status": "done",
    "subRows": undefined,
    "visits": 35
  },
  {
    "eid": 2,
    "firstName": "kirti",
    "lastName": "kumar",
    "progress": 80,
    "status": "done",
    "subRows": undefined,
    "visits": 36
  },
  {
    "eid": 3,
    "firstName": "trip",
    "lastName": "kumar",
    "progress": 80,
    "status": "done",
    "subRows": undefined,
    "visits": 37
  },
  {
    "eid": 4,
    "firstName": "apple",
    "lastName": "jam",
    "progress": 80,
    "status": "done",
    "subRows": undefined,
    "visits": 38
  },
  {
    "eid": 5,
    "firstName": "kiwi",
    "lastName": "mango",
    "progress": 80,
    "status": "done",
    "subRows": undefined,
    "visits": 39
  },
  {
    "eid": 6,
    "firstName": "kiwi",
    "lastName": "mango",
    "progress": 80,
    "status": "done",
    "subRows": undefined,
    "visits": 40
  },
  {
    "eid": 7,
    "firstName": "kiwi",
    "lastName": "mango",
    "progress": 80,
    "status": "done",
    "subRows": undefined,
    "visits": 41
  },
  {
    "eid": 8,
    "firstName": "kiwi",
    "lastName": "mango",
    "progress": 80,
    "status": "na",
    "subRows": undefined,
    "visits": 42
  },
  {
    "eid": 9,
    "firstName": "kiwi",
    "lastName": "mango",
    "progress": 80,
    "status": "na",
    "subRows": undefined,
    "visits": 43
  },
  {
    "eid": 10,
    "firstName": "kiwi",
    "lastName": "mango",
    "progress": 80,
    "status": "na",
    "subRows": undefined,
    "visits": 44
  },
  {
    "eid": 11,
    "firstName": "kiwi",
    "lastName": "mango",
    "progress": 80,
    "status": "na",
    "subRows": undefined,
    "visits": 35
  },
  {
    "eid": 12,
    "firstName": "kiwi",
    "lastName": "mango",
    "progress": 80,
    "status": "done",
    "subRows": undefined,
    "visits": 45
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
            filter: 'fuzzyText',
          }
        ]
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Employee Id',
            accessor: 'eid',
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
            Header: 'Current',
            accessor: 'progress',
          },

          // Delete Functionality
          {
            Header: 'Delete',
            id: 'delete',
            accessor: (str) => 'delete',

            Cell: (tableProps) => (
              <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
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

  // console.log(data);
  // Delete functionality

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

  //Pagination
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

