function loadContact() {

  function component(){
    const element = document.createElement("div")
    element.classList.add("dark")
    element.classList.add("text-container")
    const h2 = document.createElement("h2")
    h2.innerText = "Contact"

    element.appendChild(h2)

    return element
  }
  
  
  document.querySelector(".content").appendChild(component())
}

export {loadContact}