(function () {
  "use strict";
  window.ROOT = "http://127.0.0.1:8081";
  window.showToast = function (value) {
    let toast = document.getElementById("toast");
    toast.innerHTML = value;
    toast.style.display = "block";
    window.setTimeout(function () {
      toast.style.display = "none";
    }, 2000);
  };
})();
