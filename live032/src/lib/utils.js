import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function sleep(timeInMs = 1000) {
  return new Promise(resolve => setTimeout(resolve, timeInMs));
}
