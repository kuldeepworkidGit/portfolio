import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateEmail = (email: string) => {
  // const re = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const re =
    /^[a-zA-Z0-9]+(?:[-_.+][a-zA-Z0-9]+)*@[a-zA-Z]+(?:-[a-zA-Z0-9]+)*(?:\.[a-zA-Z]{2,3}){1,}$/i;

  return re.test(email);
};
