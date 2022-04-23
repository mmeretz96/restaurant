function loadHome() {

  function component(){
    const element = document.createElement("div")
    element.classList.add("dark")
    element.classList.add("text-container")
    const h2 = document.createElement("h2")
    h2.innerText = "Welcome!"
    const p = document.createElement("p")
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, cumque. Voluptate quam asperiores fuga laborum soluta voluptatum perspiciatis excepturi accusantium dignissimos, facere tempora minus sunt error perferendis maiores. Ad, laudantium."
    
    element.appendChild(h2)
    element.appendChild(p)
    return element
  }
  
  
  document.querySelector(".content").appendChild(component())
}

export {loadHome}