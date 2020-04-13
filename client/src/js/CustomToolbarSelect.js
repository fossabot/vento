import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import { useFetch } from "./useFetch";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteRecords } from "./utils/assets.js";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { update } from "./utils/assets";
import { toast } from "react-toastify";
import AssetForm from "./AssetForm";
import URIs from "./utils/apis";

const defaultToolbarSelectStyles = {
  iconButton: {},
  iconContainer: {
    marginRight: "24px"
  },
  inverseIcon: {
    transform: "rotate(90deg)"
  }
};

const CustomToolbarSelect = (props) => {
  const { data, error } = useFetch("/api/assets");
  var rowData = data["assets"];
  const [editModalShow, setEditModalShow] = useState(false);
  const [dataToEdit, setDataToEdit] = useState({});
  const handleMyDelete =(selectedRows) => {
    const indexToDelete = selectedRows.data.map(item => item.dataIndex);
    var idsToDelete = [];
    for (var i = 0; i < indexToDelete.length; i++) {
      idsToDelete.push(rowData[indexToDelete[i]]["id"]);
    }
    deleteRecords({ ids: idsToDelete });
    location.reload();
  }

  const onSubmit = (data) => {
    const editAsset = async () => {
      try {
        var payload = data;
        payload["product_id"] = dataToEdit.product_id;
        payload["department_id"] = dataToEdit.department_id;
        payload["owner_id"] = dataToEdit.owner_id;
        await update(payload, dataToEdit.id);
      } catch (e) {
        console.log(e.code, e.message);
        toast(e.message, {
          type: toast.TYPE.ERROR,
          autoClose: 5000,
          position: toast.POSITION.TOP_CENTER
        });
      }
    }
    editAsset();
    setEditModalShow(false);
    window.location.reload(false);
  };

  const EditModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id = "contained-modal-title-vcenter">
            EDIT ASSET
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AssetForm
            type = "edit"
            dataToEdit = {dataToEdit}
            onSubmit = {onSubmit}
            handleEdit = {handleEdit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick = {props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const handleEdit = async (selectedRows) => {
    const indexToEdit = selectedRows.data.map(item => item.dataIndex);
    var idToEdit = rowData[indexToEdit]["id"];
    const data = await axios(URIs.assets + "/" + idToEdit);
    const dataToEdit = data.data.asset;
    setDataToEdit(dataToEdit);
    setEditModalShow(true);
  }
  return (
    <div>
      <Tooltip title = {"Delete"}>
        <IconButton
          className = "class-edit"
          onClick = {() => handleMyDelete(props.selectedRows)}
        >
          <DeleteIcon className = {"CustomToolbar-deleteIcon-124"} />
        </IconButton>
      </Tooltip>
      {(() => {
        if (Object.keys(props.selectedRows.data).length === 1) {
          return (
            <Tooltip title = {"Edit"}>
              <IconButton
                className = "class-edit"
                onClick = {() => handleEdit(props.selectedRows)}
              >
                <EditIcon className = {"CustomToolbar-addIcon-124"} />
              </IconButton>
            </Tooltip>
          );
        }
      })()}
      <EditModal show = {editModalShow} onHide = {() => setEditModalShow(false)} />
    </div>
  );
};

export default withStyles(defaultToolbarSelectStyles, {
  name: "CustomToolbarSelect"
})(CustomToolbarSelect);
