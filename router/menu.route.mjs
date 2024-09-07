import { Router } from "express";
import { Menu } from "../controller/menu.controller.mjs";


const menu = Router();

menu.get('/menu', Menu.GetAllMenu);
menu.get('/menu/:id', Menu.GetItemById);


export { menu }