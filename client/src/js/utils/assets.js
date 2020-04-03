import URIs from "./apis";
const axios = require("axios");

export async function create(payload) {
  const headers = {
    headers: {
      "Content-Type": "text/plain"
    }
  };
  const response = await axios.post(URIs.assets, payload, headers);

  if (response && response.data) {
    console.log(response);
  } else {
    throw {
      message: response.data.message,
      code: response.data.code
    };
  }
}
export async function update(payload, id) {
  const headers = {
    headers: {
      "Content-Type": "text/plain"
    }
  };
  const response = await axios.put(URIs.assets + "/" + id, payload, headers);

  if (response && response.data) {
    console.log(response);
  } else {
    throw {
      message: response.data.message,
      code: response.data.code
    };
  }
}
export async function deleteRecords(payload) {
  const headers = {
    headers: {
      "Content-Type": "text/plain"
    }
  };
  const response = await axios.post(
    URIs.assets + "/multiDelete",
    payload,
    headers
  );

  if (response && response.data) {
    console.log(response);
  } else {
    throw {
      message: response.data.message,
      code: response.data.code
    };
  }
}
