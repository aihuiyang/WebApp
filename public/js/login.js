(function () {
  "use strict";
  let app = {
    init: function () {
      this.addEvent();
    },
    addEvent: function () {
      let onLogin = function () {
        let $userName = document.getElementById("userName");
        let $password = document.getElementById("password");

        let userName = $userName.value;
        let password = $password.value;

        if (!userName) {
          return window.showToast("Please enter one user name");
        }
        if (!password) {
          return window.showToast("Please enter one password");
        }
        axios({
          url: "/login",
          method: "post",
          data: {
            userName: userName,
            password: password
          }
        }).then(function (res) {
          res = res.data
          if (res.status !== 0) {
            return window.showToast(res.message);
          }
          window.sessionStorage.setItem("user", JSON.stringify(res.data));
          window.showToast("signup success!");
          setTimeout(function () {
            window.location.href = "/index.html";
          }, 500);
        })
      };
      document.getElementById("button").addEventListener("click", onLogin);
    }
  };
  app.init();
})();
