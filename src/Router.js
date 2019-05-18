import foo from '../pages/foo/index.js';
import bar from '../pages/bar/index.js';
const BaseHref = '/router/';
const router = document.querySelector("#router");

const map = {
  'pages/foo':foo,
  'pages/bar':bar
}

class Router {
  start() {
    window.addEventListener("popstate", () => {
      Router.load(location.pathname)
    });
    Router.load(location.pathname);
    document.querySelectorAll('.routerLink').forEach(item => {
      item.addEventListener('click', () => {
        Router.go(item.dataset.href);
      }, false);
    });
  }
  static go(path){
    history.pushState({}, '', `.${path}`);
    Router.load(`${BaseHref}pages${path}`);
  }
  static load(path){
    console.log(path);
    if (path === BaseHref) return;
    const key = path.split(BaseHref)[1];
    console.log(key);
    console.log(map);
    router.innerHTML = map[key]
  }
}
export { Router }
