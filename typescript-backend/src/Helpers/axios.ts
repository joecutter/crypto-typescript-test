import axios from "axios";

const sendHttpRequest = async (requestData: any) => {
  console.log("\n\nHttp request.....%j\n\n", requestData);
  try {
    const textRes = await axios(requestData);

    console.log("resCode==>", textRes);

    if (textRes.status !== 200) {
      return null;
    }

    console.log("resData==>", textRes.data);
    return textRes.data;
  } catch (error: any) {
    if (error?.response) {
      // Request made and server responded
      // console.error("Headers ==>\n", error.response.headers);
      console.error("Status ==>\n", error.response.status);
      console.error("Data ==>\n", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Http Request ==>\n", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error Message ==>\n", error.message);
    }
  }
};

export default { sendHttpRequest };
