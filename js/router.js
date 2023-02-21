export class Router {
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }


  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }

  
changeBg(pathname) {
 
  const { body } = document;

  switch (pathname) {
    case '/exploration':
      body.className = 'exploration';
      
      console.log(pathname)
      break;

    case '/universe':
      body.className = 'universe';
      console.log(pathname)
      break;

    default:

      body.className = '';
      console.log(pathname)
      break;
  }
}




  handle() {
    const {pathname} = window.location
    const route = this.routes[pathname] || this.routes[404]
    this.changeBg(pathname)
    // console.log(pathname)
  
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector("#app").innerHTML = html
    })
  }
}


