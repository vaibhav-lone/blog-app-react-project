import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json ";

axios.interceptors.request.use(
  request => {
    console.log(request);
    // We can edit the request config
    return request;
  },
  error => {
    console.log(error); // this error here is related to sending the request, for example if we dont have the internet connection then this error should pop up
    return Promise.reject(error); // we have to return the errors here because we can then use them locally in the individual components to catch the errors
  }
);

axios.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

// we can also add a interceptor for response handler

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
