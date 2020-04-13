import React from "react";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
import Modal from "react-bootstrap/Modal";
import ReactFileReader from "react-file-reader";
import { csvJSON } from "./utils/UploadCsv";
import { create } from "./utils/assets";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import AssetForm from "./AssetForm";

//to Get CSV and Multi Create Event
const handleFiles  =  (files)  => {
  try {
    var reader  =  new FileReader();
    reader.onload  =  async function(e) {
      var jsonArray  =  csvJSON(reader.result);
      await create(jsonArray);
    };
    reader.readAsText(files[0]);
    location.reload();
  } catch (e) {
    console.log(e.code, e.message);
  }
};
// end

const CustomToolbar  =  (props)  => {
  const [modalShow, setModalShow]  =  useState(false);
  const [sModalShow, setSModalShow]  =  useState(false);
  const [hModalShow, setHModalShow]  =  useState(false);

  const onSubmit  =  (data)  => {
    addAsset(data);
    if (data.assetType  ===  "Software") {
      setSModalShow(false);
    } else {
      setHModalShow(false);
    }
    window.location.reload(false);
  };

  const addAsset = async (data) => {
    try {
      await create([data]);
    } catch (e) {
      console.log(e.code, e.message);
      toast(e.message, {
        type: toast.TYPE.ERROR,
        autoClose: 5000,
        position: toast.POSITION.TOP_CENTER
      });
    }
  }

  const MyVerticallyCenteredModal  =  (props)  => {
    return (
      <Modal
        {...props}
        size = "lg"
        aria-labelledby = "contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id = "contained-modal-title-vcenter">
            Add new Asset
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please choose the type to continue.</h4>
          <Button
            onClick = {()  => {
              setSModalShow(true);
              setModalShow(false);
            }}
          >
            Software
          </Button>
          <Button
            onClick = {()  => {
              setHModalShow(true);
              setModalShow(false);
            }}
          >
            Hardware
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick = {props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  const SModal  =  (props)  => {
    return (
      <Modal
        {...props}
        size = "lg"
        aria-labelledby = "contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id = "contained-modal-title-vcenter">
            Software Asset
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please enter the details</h4>
          <AssetForm type = "create" asset_type = "Software" onSubmit = {onSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick = {props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  const HModal  =  (props)  => {
    return (
      <Modal
        {...props}
        size = "lg"
        aria-labelledby = "contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id = "contained-modal-title-vcenter">Hardware</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please enter the details</h4>
          <AssetForm type = "create" asset_type = "Hardware" onSubmit = {onSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick = {props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <React.Fragment>
      <Tooltip title = {"Create Asset"}>
        <IconButton
          className = {"CustomToolbar-iconButton-122"}
          onClick = {()  => setModalShow(true)}
        >
          <AddBoxIcon className = {"CustomToolbar-addIcon-124"} />
        </IconButton>
      </Tooltip>
      <MyVerticallyCenteredModal
        show = {modalShow}
        onHide = {()  => setModalShow(false)}
      />
      <SModal show = {sModalShow} onHide = {()  => setSModalShow(false)} />
      <HModal show = {hModalShow} onHide = {()  => setHModalShow(false)} />
      <Tooltip title = {"Upload CSV"}>
        <IconButton className = "CustomToolbar-upload">
          <ReactFileReader handleFiles = {handleFiles} fileTypes = {".csv"}>
            <PublishIcon className = "CustomToolbar-uploadicon" />
          </ReactFileReader>
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );
};

export default withRouter(CustomToolbar);
