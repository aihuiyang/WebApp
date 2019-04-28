(function () {
  "use strict";
  let app = {
    init: function () {
      this.addEvent();
    },
    addEvent: function () {
      let onRegister = function () {
        let $userName = document.getElementById("userName");
        let $password1 = document.getElementById("password1");
        let $password2 = document.getElementById("password2");

        let userName = $userName.value;
        let password1 = $password1.value;
        let password2 = $password2.value;

        if (!userName) {
          return window.showToast("Please enter one user name");
        }
        if (userName.length < 6) {
          return window.showToast("User name not less than 6 digits");
        }
        if (!password1) {
          return window.showToast("Please enter one password");
        }
        if (password1.length < 6) {
          return window.showToast("Password not less than 6 digits");
        }
        if (!password2) {
          return window.showToast("Please enter a confirmation password");
        }
        if (password1 !== password2) {
          $password2.value = "";
          return window.showToast("Two password inconsistencies");
        }
        axios({
          url: "/user/create",
          method: "post",
          data: {
            userName: userName,
            password: password1
          }
        }).then(function (res) {
          res = res.data
          if (res.status !== 0) {
            return window.showToast(res.message);
          }
          window.showToast("signin success!");
          setTimeout(function () {
            window.location.href = "/login.html";
          }, 500);
        })
      };
      document.getElementById("button").addEventListener("click", onRegister);
    }
  };
  app.init();
})();
