import './style.css';
import {pageLoad} from './loadPage.js';
import { loadMenu } from './menu';
import { loadHome } from './home';
import { loadContact } from './contact';

pageLoad()
loadHome()

const home = document.querySelector(".home")
home.addEventListener("click", ()=>{
  clearContent()
  loadHome()
})

const menu = document.querySelector(".menu")
menu.addEventListener("click", ()=>{
  clearContent()
  loadMenu()
})

const contact = document.querySelector(".contact")
contact.addEventListener("click", ()=>{
  clearContent()
  loadContact()
})

const clearContent = () =>{
  document.querySelector(".content").innerHTML = ""
}