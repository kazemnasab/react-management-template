import { Colxx, Separator } from "components/bootstrap/CustomBootstrap";
import IntlMessages from "helpers/IntlMessages";
import React from "react";
import Select from "react-select";
import { injectIntl } from "react-intl";
import {
  Row,
  Card,
  CardBody,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import CustomNoRowsOverlay from "components/common/CustomNoRowsOverlay";
import CustomPagination from "components/common/CustomPagination";

const columns = [
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla1", label: "Vanilla1" },
  { value: "vanilla2", label: "Vanilla2" },
  { value: "vanilla3", label: "Vanilla3" },
];

const Index = ({ intl }) => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [formState, setFormState] = React.useState(false);
  const { messages } = intl;
  React.useEffect(() => {}, []);
  const [modal, setModal] = React.useState(false);
  const [unmountOnClose, setUnmountOnClose] = React.useState(true);

  const toggle = () => setModal(!modal);
  const changeUnmountOnClose = (e) => {
    let { value } = e.target;
    setUnmountOnClose(JSON.parse(value));
  };
  React.useEffect(() => {
    const handler = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    // if the form is NOT unchanged, then set the onbeforeunload
    if (formState) {
      window.addEventListener("beforeunload", handler);
      // clean it up, if the dirty state changes
      return () => {
        window.removeEventListener("beforeunload", handler);
      };
    }
    // since this is not dirty, don't do anything
    return () => {};
  }, [formState]);

  return (
    <div>
      <h4 className="py-3 breadcrumb-wrapper">
        <span className="text-muted fw-light">{messages["app.home"]} /</span>{" "}
        {messages["donation.home"]}
      </h4>
      <Card>
        <CardBody>
          <Row className="mb-4">
            <Colxx sm="12" md="12" lg="12">
              <Button onClick={toggle} color="info">
                ????????
              </Button>{" "}
              <Button onClick={toggle} color="info">
                ???????????? ??????????
              </Button>{" "}
              <Button color="dark">?????????? ????????</Button>{" "}
              <Button color="danger">??????</Button>{" "}
            </Colxx>
          </Row>
          <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
              <Input
                type="textarea"
                placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
                rows={5}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Do Something
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
          <Box sx={{ height: 500, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pagination
              rowsPerPageOptions={[5]}
              components={{
                Pagination: CustomPagination,
                NoRowsOverlay: CustomNoRowsOverlay,
              }}
              pageSize={5}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </CardBody>
      </Card>
    </div>
  );
};
export default injectIntl(Index);
