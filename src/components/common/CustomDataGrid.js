
import React, { useEffect, useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Badge } from 'reactstrap';
import CustomNoRowsOverlay from "components/common/CustomNoRowsOverlay";
import CustomPagination from "components/common/CustomPagination";
import { Box } from '@mui/material';

const createReactClass = (params, onRowDoubleClick) => {
  return <Badge className="btnedit cursor-hand" onClick={() => { onRowDoubleClick(params.row) }} >Edit</Badge>;
}

const rowColumn = [
  {
    field: "row",
    headerName: "#",
    width: 50,
  }
]

const CustomDataGrid = ({
  rows,
  editLink,
  onRowDoubleClick,
  pageSize,
  columns,
  checkboxSelection,
  getRowClassName
}) => {

  const editColumn = [
    {
      field: "action",
      headerName: "ویرایش",
      width: 130,
      renderCell: (params) => { return createReactClass(params, onRowDoubleClick) }
    }
  ]
  const [cols, setCols] = useState(rowColumn);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setCols(rowColumn.concat(columns));
    if (editLink)
      setCols(rowColumn.concat(columns).concat(editColumn));
    setItems(rows.map((item, index) => { return { ...item, row: index + 1 }; }));
  }, [rows]);
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        style={FontFace = { family: "inherit !important" }}
        rows={items}
        rowHeight={35}
        onRowDoubleClick={onRowDoubleClick}
        columns={cols}
        pageSize={pageSize}
        components={{
          Pagination: CustomPagination,
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
        rowsPerPageOptions={[pageSize]}
        checkboxSelection={checkboxSelection}
        getRowClassName={getRowClassName}
      />
    </Box>
  );
};

export default React.memo(CustomDataGrid);
