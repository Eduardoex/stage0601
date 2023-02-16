import {Router} from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route ()




function changeBg() {
  const { pathname } = window.location;
  const { body } = document;

  switch (pathname) {
    case '/exploracao':
      body.className = 'explore';
      break;

    case '/universo':
      body.className = 'universe';
      break;

    default:
      body.className = '';
      break;
  }
}

changeBg()