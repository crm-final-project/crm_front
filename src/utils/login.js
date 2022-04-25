export class Loggin {
  #getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  isLoggedIn() {
    const access_token = this.#getCookie('access_token');

    return window.localStorage.access_token !== undefined;
  }

  logOut() {
    window.localStorage.clear();
    window.location = '/';
  }
}
