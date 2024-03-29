import { Cookies } from "react-cookie";
import { Cookie, CookieSetOptions } from "universal-cookie";

const cookies = new Cookies();

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const setCookie = (name: string, value: Cookie, option?: CookieSetOptions) => {
  return cookies.set(name, value, { ...option });
};

export const removeCookie = (name: string, options?: CookieSetOptions) => {
  return cookies.remove(name, { ...options });
};
