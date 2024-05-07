function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  /*html.classList.toggle('light')

  função "toggle" acima ja existe e tem a mesma função da construida acima ja naturamente no JS */

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.jpeg")
  }

  const src = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "avatar dia")
  } else {
    img.setAttribute("alt", "avatar noite")
  }
}
