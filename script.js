function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light"))
  //   html.classList.remove("light")
  // else
  //   html.classList.add("light")

  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver em light mode, usar img light mode
    img.setAttribute("src", "./assets/habit/hbt-light.png")
    // se tiver em light mode, usar img light mode
  } else {
    img.setAttribute("src", "./assets/habit/hbt-dark.png")
  }
}
