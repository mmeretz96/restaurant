import Image from './restaurant.jpg';

function pageLoad() {
  function component() {
    const element = document.createElement("div")

    const h1 = document.createElement("h1")
    h1.innerText = "My Restaurant"

    const img = document.createElement("img")
    img.classList.add("header-img")
    img.src = Image

    element.appendChild(h1)
    element.appendChild(img)
    return element
  }

  function header(){
    const element = document.createElement("div")

    const nav = document.createElement("nav")
    
    const ul = document.createElement("ul")

    const home = document.createElement("li")
    home.innerText = "Home"
    home.classList.add("home")
    const menu = document.createElement("li")
    menu.innerText = "Menu"
    menu .classList.add("menu")
    const contact = document.createElement("li")
    contact.innerText = "Contact"
    contact.classList.add("contact")

    ul.appendChild(home)
    ul.appendChild(menu)
    ul.appendChild(contact)
    nav.appendChild(ul)
    element.appendChild(nav)

    return element
  }


  document.querySelector("header").appendChild(header())
  document.querySelector("header").appendChild(component())
  
}

export{pageLoad}