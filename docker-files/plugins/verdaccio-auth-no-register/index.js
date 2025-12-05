'use strict';

class NoRegisterAuth {
  constructor(config, options) {
    this.config = config;
  }

  authenticate(username, password, cb) {
    // Normal htpasswd davranışına karışmıyoruz.
    cb(null, false);
  }

  adduser(username, password, cb) {
    // Yeni kullanıcı kaydını engelle
    cb(new Error('User registration is disabled on this server.'));
  }
}

module.exports = (config, options) => {
  return new NoRegisterAuth(config, options);
};
