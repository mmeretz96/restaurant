function loadMenu() {

  function component(){
    const element = document.createElement("div")
    const h2 = document.createElement("h2")
    element.classList.add("dark")
    element.classList.add("text-container")
    h2.innerText = "Menu"

    element.appendChild(h2)

    return element
  }
  
  
  document.querySelector(".content").appendChild(component())
}

export {loadMenu}