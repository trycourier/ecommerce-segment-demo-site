import { atom } from "recoil";
import { nanoid } from "nanoid";

export const cartState = atom({ key: "cart", default: {} });

export const orderState = atom({ key: "order", default: {} });
