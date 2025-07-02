import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ald from "../assets/AnimeLand.png";
import Apple from "../assets/Apple.png";
import mcb from "../assets/MarioClub.png";
import smn from "../assets/SushiMan.png";
import ccv from "../assets/image.png";
import vtp from "../assets/Vaccitime.png";
import kzb from "../assets/kazeblog.png";
import nca from "../assets/nca.png";
import tic from "../assets/tickr.png";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const animePic = ald;
export const applePic = Apple;
export const marioPic = mcb;
export const sushiPic = smn;
export const currPic = ccv;
export const vacciPic = vtp;
export const kazePic = kzb;
export const ncaPic = nca;
export const ticPic = tic;
