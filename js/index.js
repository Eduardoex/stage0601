import {Router} from "./router.js"

// let buttonDisabled = document.querySelector(".buttonDisabled")
// let buttonEnable = document.querySelector(".buttonEnable")

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route ()


// buttonEnable.addEventListener("click", function () {
//   buttonDisabled.classList.toggle("hide")
//   buttonEnable.classList.toggle("hide")
// })

// buttonDisabled.addEventListener("click", function (){
//   buttonDisabled.classList.toggle("hide")
//   buttonEnable.classList.toggle("hide")
// })


