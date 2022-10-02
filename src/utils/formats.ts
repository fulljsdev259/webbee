import moment from "moment";
import { fieldType } from "../services/static-data";

// generate unique id
export const getUUID = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// bebounce the user handles
export function debounce(fun: Function, delay: number) {
  let timer: any;
  return function (...props: any[]) {
    clearTimeout(timer);
    timer = null;
    timer = setTimeout(() => {
      fun.apply(null, props);
    }, delay);
  };
}

/**
 * @example
 * // returns true - as date is in correct format
 * @param {any} date -  date is any type
 * isValidDate('03/05/2022');
 * @example
 * // returns false - as date is not in correct format
 * @param {any} date - date is any type
 * isValidDate('03/05/2022a');
 */
export const isValidDate = (date: any) => {
  return moment(date).isValid();
};


/**
 * @example
 * // returns 03/05/2022 - as date is in correct format
 * @param {any} date -  date is any type
 * getFormattedDate('03/05/2022' | new Date() | any);
 * @example
 * // returns date - as date is not in correct format
 * @param {any} date - date is any type
 * getFormattedDate('03/05/2022a' | 'any');
 */
export const getFormattedDate = (date: any) => {
  if (isValidDate(date)) {
    return moment(date).format("DD/MM/yyyy");
  }
  return date;
};

export const formatValueForNumber = (value: any) => {
  if (value === "") {
    return value;
  } else if (typeof value === "boolean") {
    // let's convert flag into number like true = 1, false = 0
    return String(Number(value));
  } else if (isNaN(Number(value))) {
    // text type number, does not accept any other type of values but number, reseting it to empty field
    return "";
  } else {
    return String(Number(value));
  }
};

export const getFormattedValue = (value: any, type: string) => {
  let formattedValue = value;
  try {
    if (type === fieldType.DATE) {
      // check if user has changed any attribute to date, then the value will not be applicable to date instance
      formattedValue = isValidDate(value) ? getFormattedDate(value) : "";
    } else if (type === fieldType.CHECKBOX) {
      // check if user has changed any attribute to checkbox: boolean
      formattedValue = !!value;
    } else if (type === fieldType.NUMBER) {
      // check if user has changed any attribute to number, text of any will not be apply to text field then showing the header as empty and let the user type the number
      formattedValue = formatValueForNumber(value);
    } else {
      formattedValue = getFormattedDate(value);
    }

    return formattedValue;
  } catch (error) {
    // doing so, as input field does not accept any type but string, just safing the zone.
    return String(formattedValue);
  }
};
