import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ald from "../assets/AnimeLand.png";
import Apple from "../assets/Apple.png";
import mcb from "../assets/MarioClub.png";
import smn from "../assets/SushiMan.png";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const animePic = ald;
export const applePic = Apple;
export const marioPic = mcb;
export const sushiPic = smn;
