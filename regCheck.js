//using commonJS
module.exports = function regCheck(registration, code) {
    return registration.includes(code);
  }