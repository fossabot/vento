import React from "react";
import MUIDataTable from "mui-datatables";
import { useFetch } from "./useFetch";
import { withRouter } from "react-router-dom";
import CustomToolbar from "./CustomToolbar";
import CustomToolbarSelect from "./CustomToolbarSelect";
import URIs from "./utils/apis";
import Logout from "./Logout";

function AssetList(props) {
  const { loading, data, error } = useFetch(URIs.assets);
  var rowData = data["assets"];
  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        sort: true,
        display: "excluded",
      },
    },
    {
      name: "asset_type",
      label: "Asset Type",
      options: {
        sort: true,
      },
    },
    {
      name: "assetName",
      label: "Asset Name",
      options: {
        sort: true,
      },
    },
    {
      name: "productName",
      label: "Product Name",
    },
    {
      name: "ownerName",
      label: "Owner Name",
      options: {
        sort: true,
      },
    },
    {
      name: "departmentName",
      label: "Department Name",
      options: {
        sort: true,
      },
    },
  ];

  const options = {
    filterType: "dropdown",
    selectableRows: "none",
    filter: true,
    filterType: "checkbox",
    responsive: "scrollMaxHeight",
    selectableRows: true,
    print: false,
    download: false,
    viewColumns: true,
    onRowClick: rowData => {
      props.history.push("/viewasset", { id: rowData[0] });
    },
    customToolbar: () => {
      return <CustomToolbar />;
    },
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
      <div>
        <CustomToolbarSelect selectedRows={selectedRows} />
      </div>
    ),
    textLabels: {
      body: {
        noMatch: props.isLoading ? <Loader /> : "Error: " + error
      },
    },
  };

  return (
    <div>
      <header className="fixed-top bg-white border-bottom box-shadow masthead d-flex">
        <div className="masthead-navbar__spacer"></div>
        <div className="masthead-body flex-grow-1 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <h2 className="masthead-body__title mr-2">Assets</h2>
              <span class="badge badge-primary mt-1">285</span>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-light">
                Import Assets
              </button>
              <button className="btn btn-primary">
                <span className="btn__value">Add Assets</span>
              </button>
              <Logout hist = {props.history} />
            </div>
        </div>
      </header>
      <main className="main-content">
        <MUIDataTable
          title={"Assets"}
          data={rowData}
          columns={columns}
          options={options}
        />
      </main>
    </div>
  );
}

export default withRouter(AssetList);
