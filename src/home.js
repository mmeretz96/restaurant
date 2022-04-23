function loadHome() {

  function component(){
    const element = document.createElement("div")
    element.classList.add("dark")
    element.classList.add("text-container")
    const h2 = document.createElement("h2")
    h2.innerText = "Welcome!"
    const p = document.createElement("p")
    p.innerText = "Sie sind Liebhaber der Küche Ungarn, Griechenlands und suchen nach einem Schwäbisch und Griechisch/Ungarischen Restaurant? In unserem gemütlichen Lokal können Sie in herzlicher Atmosphäre original schwäbische, ungarische und griechische Spezialitäten genießen. Unsere abwechslungsreiche Speisekarte enthällt zahlreiche Köstlichkeiten für Sie bereit und überzeugt mit Gerichten aus frischen Zutaten. Mit Liebe und Sorgfalt zubereitet, servieren wir Ihnen leckere Speisen für jeden Geschmack."
    
    element.appendChild(h2)
    element.appendChild(p)
    return element
  }
  
  
  document.querySelector(".content").appendChild(component())
}

export {loadHome}