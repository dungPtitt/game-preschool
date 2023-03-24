System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, _crd, mock_config;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d957a7WeV5GCLvNMqeGhA+0", "mock_config", undefined);

      __checkObsolete__(['log']);

      log('mock_config', '1.0.0');

      _export("mock_config", mock_config = {
        API_URL: "https://api.vietdefi.com/",
        SOCKET_URL: "wss://sock.api.vietdefi.com",
        LOGIN_USE_TOKEN: true,
        LOGIN_IFRAME: true,
        URL_TOKEN: 'token',
        URL_CODE: 'code',
        USER_TOKEN: "user_token",
        ENABLE_SFX: "enableSound",
        ENABLE_BGM: "enableBackgroundMusic"
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea3d015d07727acc1741c4e8f6aa5688f58c0c34.js.map