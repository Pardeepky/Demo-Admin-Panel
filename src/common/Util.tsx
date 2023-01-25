import { toast } from "react-toastify";
import { ITOAST_PRESET } from "../interfaces";

const TOAST_PRESET: Partial<ITOAST_PRESET> = {
  position: "top-right",
  autoClose: 2500,
  hideProgressBar: true,
  pauseOnHover: false,
};

export const setSession = (key: string, data: string) => {
  if (typeof key !== "string")
    throw new Error(`Type of key cannot be ${typeof key}`);
  if (typeof data !== "string")
    throw new Error(`Type of data cannot be ${typeof data}`);
  sessionStorage.setItem(key, data);
};

export const readSession = (key: string) => {
  if (typeof key !== "string")
    throw new Error(`Type of key cannot be ${typeof key}`);
  return sessionStorage.getItem(key);
};

export const customDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const showToast = (msg: string) => {
  toast(msg, { ...TOAST_PRESET });
};

export const getYear = () => {
  let year = new Date();
  return year.getFullYear();
};

export const getMonth = (birthDate: any) => {
  let month = new Date(birthDate);
  return month.getMonth();
};

export const getDate = (birthDate: any) => {
  let date = new Date(birthDate);
  return date.getDate();
};
