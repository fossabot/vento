import React from "react";
import { withRouter } from "react-router-dom";
import URIs from "./utils/apis";
import { useFetch } from "./useFetch";

const ViewAsset = (props) => {
  const { loading, data, error } = useFetch(
    URIs.assets + "/" + props.location.state.id
  );
  var assetData = data["asset"];

  if (!loading) {
    return (
      <div>
        <div name = "common" style = {{ marginLeft: 300 + "px" }}>
          <h5>Asset Type: {assetData.asset_type}</h5>
          <h6>Contract End Date: {assetData.contract_end_date}</h6>
          <h6>Product Name: {assetData.productName}</h6>
          <h6>Owner Name: {assetData.ownerName}</h6>
          <h6>Department Name: {assetData.departmentName}</h6>
        </div>

        {assetData.asset_type === "Software" ? (
          <div name = "software" style = {{ marginLeft: 300 + "px" }}>
            <h6>Name: {assetData.software_name}</h6>
            <h6>Version: {assetData.software_version}</h6>
          </div>
        ) : (
          <div name = "hardware" style = {{ marginLeft: 300 + "px" }}>
            <h6>Asset ID: {assetData.hardware_asset_id}</h6>
            <h6>Location: {assetData.hardware_location}</h6>
            <h6>Type: {assetData.hardware_type}</h6>
            <h6>IP: {assetData.hardware_ip}</h6>
            <h6>Server Tag: {assetData.hardware_server_tag}</h6>
            <h6>Resource Details: {assetData.hardware_resource_details}</h6>
            <h6>State: {assetData.hardware_state.toString()}</h6>
            <h6>OS Version: {assetData.hardware_os_version}</h6>
          </div>
        )}
      </div>
    );
  } else
  {

   return null;
  }
};
export default withRouter(ViewAsset);
