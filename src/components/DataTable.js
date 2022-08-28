import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    col1: "Son of God",
    col2: "Paster Michael",
    col3: "Pastor Peterson",
    col4: "12-5-2022",
    col5: "10:00pm",
    col6: "Blog",
  },
  {
    id: 2,
    col1: "Son of God",
    col2: "Paster Michael",
    col3: "Pastor Peterson",
    col4: "12-5-2022",
    col5: "10:00pm",
    col6: "Blog",
  },
  {
    id: 3,
    col1: "Son of God",
    col2: "Paster Michael",
    col3: "Pastor Peterson",
    col4: "12-5-2022",
    col5: "10:00pm",
    col6: "Blog",
  },
  {
    id: 4,
    col1: "Son of God",
    col2: "Paster Michael",
    col3: "Pastor Peterson",
    col4: "12-5-2022",
    col5: "10:00pm",
    col6: "Blog",
  },
  {
    id: 5,
    col1: "Son of God",
    col2: "Paster Michael",
    col3: "Pastor Peterson",
    col4: "12-5-2022",
    col5: "10:00pm",
    col6: "Blog",
  },
];

const columns = [
  { field: "col1", headerName: "Title", width: 200 },
  { field: "col2", headerName: "Author", width: 200 },
  { field: "col3", headerName: "Featured", width: 200 },
  { field: "col4", headerName: "Published Date", width: 200 },
  { field: "col5", headerName: "Published Time", width: 200 },
  { field: "col6", headerName: "Category", width: 200 },
];

export default function DataTable() {
  return (
    <React.Fragment>
      <div style={{ width: "100%", height: 380 }}>
        <DataGrid rows={rows} columns={columns} autoPageSize />
      </div>
    </React.Fragment>
  );
}
