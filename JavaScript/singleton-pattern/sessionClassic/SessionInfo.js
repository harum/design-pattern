class SessionInfo {
  session;

  constructor() {
    if (!global.vestaSession) {
      this.session = 'abc';
      global.vestaSession = this;
    }

    return global.vestaSession;
  }

  getSession() {
    return 'session:' + this.session;
  }
}

const a = new SessionInfo();
console.log(a.getSession());

a.session = 'cde';
const b = new SessionInfo();
const c = new SessionInfo();

console.log(a.getSession());
console.log(b.getSession());
console.log(c.getSession());

c.session = 'xyz';
console.log(a.getSession());
console.log(b.getSession());
console.log(c.getSession());

