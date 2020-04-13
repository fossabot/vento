import useForm from "react-hook-form";
import React, { useState } from "react";
import { useFetch } from "./useFetch";
import URIs from "./utils/apis";

var dataToEdit, type;
//Submit only if value changed
const handleChange = (e) => {
  var name = document.getElementById(e);
  if (name.value !=  name.defaultValue) {
    document.getElementById("submit_button").disabled = false;
  } else {
    document.getElementById("submit_button").disabled = true;
  }
}
const buildOptions =(data, loading) => {
  var arr = [];
  if (!loading) {
    for (let i = 0; i < data.length; i++) {
      arr.push(<option key = {data[i].id} value = {data[i].id}>{data[i].display_name}</option>);
    }
    return arr;
  }
}
const buildUserOptions =(data, loading) => {
  var arr = [];
  if (!loading) {
    for (let i = 0; i < data.length; i++) {
      arr.push(<option key = {data[i].id} value = {data[i].id}>{data[i].first_name}</option>);
    }
    return arr;
  }
}
const getDepartments =() => {
  if (type  ===  "edit")
  {
    return (
      <option key = {dataToEdit.department_id} value = {dataToEdit.department_id}>
        {dataToEdit.departmentName}
      </option>
    );
  }
  const { loading, data, error } = useFetch(URIs.departments);
  return buildOptions(data["departments"], loading);
}

const getProducts =(depID) => {
  if (type  ===  "edit")
  {
    return (
      <option key = {dataToEdit.product_id} value = {dataToEdit.product_id}>
        {dataToEdit.productName}
      </option>
    );
  }
  const { loading, data, error } = useFetch(URIs.products + "?department_id=" + depID);
  return buildOptions(data["products"], loading);
}
const getUsers =(depID) => {
  if (type  ===  "edit")
  {
    return (
    <option key = {dataToEdit.owner_id} value = {dataToEdit.owner_id}>
      {dataToEdit.ownerName}
    </option>);
  }
  const { loading, data, error } = useFetch(URIs.users + "?dept_id=" + depID);
  return buildUserOptions(data["users"], loading);
}
const AssetForm = (props)  => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  type = props.type;
  var enableDisable, asset_type, department_id;

  if (props.type  ===  "edit") {
    dataToEdit = props.dataToEdit;
    department_id = dataToEdit.department_id;
    enableDisable = true;
    asset_type = dataToEdit.asset_type;
  } else {
    dataToEdit = {
      departmentName: "283802a0-52e1-11ea-b891-cd988dbdc9bf",
      productName: "bbb3a2e0-52e2-11ea-9422-1978c4a70a50",
      ownerName: "69dea7ba-2878-11ea-978f-2e728ce88125"
    };
    department_id = dataToEdit.departmentName;
    enableDisable = false;
    asset_type = props.asset_type;
  }

  const [depID, setDepID] = useState(department_id);
  return (
    <form onSubmit = {handleSubmit(props.onSubmit)}>
      {asset_type  ===  "Software" ? (
        <div className = "software">
          <input
            name = "asset_type"
            placeholder = "Software"
            defaultValue = {asset_type}
            ref = {register({ required: true })}
            disabled
          />

          <label htmlFor = "swName">Name</label>
          <input
            name = "software_name"
            id = "swName"
            defaultValue = {dataToEdit.software_name}
            ref = {register({ required: true })}
            disabled = {enableDisable}
          />

          <label htmlFor = "swVersion">Software Version</label>
          <input
            name = "software_version"
            id = "swVersion"
            defaultValue = {dataToEdit.software_version}
            ref = {register({ required: false })}
            onChange = {e  => {
              handleChange("swVersion");
            }}
          />

          <label htmlFor = "contractEndDate">Contract End Date</label>
          <input
            name = "contract_end_date"
            id = "contractEndDate"
            defaultValue = {dataToEdit.contract_end_date}
            ref = {register({ required: false })}
            onChange = {e  => {
              handleChange("contractEndDate");
            }}
          />
        </div>
      ) : (
        <div className = "hardware">
          <input
            name = "asset_type"
            placeholder = "Hardware"
            defaultValue = {asset_type}
            ref = {register({ required: true })}
            disabled
          />

          <label htmlFor = "hwtype"> Hardware Type </label>
          <input
            name = "hardware_type"
            defaultValue = {dataToEdit.hardware_type}
            ref = {register({ required: true })}
            disabled = {enableDisable}
          />

          <label htmlFor = "hwIP"> Hardware IP </label>
          <input
            name = "hardware_ip"
            defaultValue = {dataToEdit.hardware_ip}
            ref = {register({ required: true })}
            disabled = {enableDisable}
          />

          <label htmlFor = "hwVersion">Hardware Os Version</label>
          <input
            name = "hardware_os_version"
            id = "hwVersion"
            defaultValue = {dataToEdit.hardware_os_version}
            ref = {register({ required: true })}
            onChange = {e  => {
              handleChange("hwVersion");
            }}
          />

          <label htmlFor = "hwLocation">Hardware Location</label>
          <input
            name = "hardware_location"
            id = "hwLocation"
            defaultValue = {dataToEdit.hardware_location}
            ref = {register({ required: false })}
            onChange = {e  => {
              handleChange("hwLocation");
            }}
          />

          <label htmlFor = "hwState">Hardware State</label>
          <select
            name = "hardware_state"
            id = "hwState"
            defaultValue = {dataToEdit.hardware_state}
            ref = {register({ required: false })}
            onChange = {e  => {
              handleChange("hwState");
            }}
          >
            <option value = {""}>None</option>
            <option value = {true}>True</option>
            <option value = {false}>False</option>
          </select>
        </div>
      )}

      <label htmlFor = "DID">Department Name </label>
      <select
        name = "department_id"
        id = "DID"
        defaultValue = {dataToEdit.departmentName}
        ref = {register({ required: false })}
        disabled = {enableDisable}
        onChange = {e  => {
          setDepID(e.target.options[e.target.selectedIndex].value);
        }}
      >
        {getDepartments()}
      </select>

      <label htmlFor = "PID">Product Name</label>
      <select
        name = "product_id"
        id = "PID"
        defaultValue = {dataToEdit.productName}
        ref = {register({ required: false })}
        disabled = {enableDisable}
      >
        {getProducts(depID)}
      </select>

      <label htmlFor = "OID">Owner Name</label>
      <select
        name = "owner_id"
        id = "OID"
        defaultValue = {dataToEdit.ownerName}
        ref = {register({ required: false })}
        disabled = {enableDisable}
      >
        {getUsers(depID)}
      </select>

      <input type = "submit" id = "submit_button" disabled = {enableDisable} />
    </form>
  );
};
export default AssetForm;
