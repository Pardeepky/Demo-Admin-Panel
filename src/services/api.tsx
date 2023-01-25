import axios from "axios";
import { API_BASE } from "../common/constants";

export const getData = async (pageNumber: number, per_page: number) => {
  let response;
  response = await axios.get(
    `${API_BASE.URL2}?skip=${pageNumber * 10}&limit=${per_page}`
  );
  return {
    data: response.data,
    errors:
      response.data.Errors ||
      response.data.Message ||
      "Something went wrong on server!",
    status: response.status,
  };
};

export const postData = async (data: any) => {
  let response;
  response = await axios.post(API_BASE.URL2 +'/add', data);
  return { data: response.data, status: response.status };
};

export const userLogin = async (data: any) => {
  let response;
  response = await axios.post(API_BASE.Login, data);
  return { data: response.data, status: response.status };
};

export const deleteUser = async (id: string) => {
  let response;
  response = await axios.delete(API_BASE.URL2 + `/${id}`);
  return { data: response.data, status: response.status };
};

export const getDataById = async (id: any) => {
  let response;
  response = await axios.get(API_BASE.URL2 + `/${id}`);
  return {
    data: response,
    errors:
      response.data.Errors ||
      response.data.Message ||
      "Something went wrong on server!",
    status: response.status,
  };
};
