import React from "react";
import MUIDataTable from "mui-datatables";
import { useFetch } from "./useFetch";
import { withRouter } from "react-router-dom";
import CustomToolbar from "./CustomToolbar";
import CustomToolbarSelect from "./CustomToolbarSelect";
import URIs from "./utils/apis";

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
    <div className="assetlist">
      <h1 className="assetlist-title"> LIST OF ASSETS </h1>
      <div className="asset-list">
        <MUIDataTable
          title={"Assets"}
          data={rowData}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
}

export default withRouter(AssetList);
