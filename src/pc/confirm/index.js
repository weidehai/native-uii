const html = require("./tpl/index.tpl");
import { appendHTML } from "ifuncs";
export const Confirm = (function () {
  let successFn;
  let failFn;
  function init(config) {
    (successFn = []), (failFn = []);
    let tp = html(config);
    appendHTML(document.body, tp);
    setCallback(config);
    addEvent();
  }
  function addEvent() {
    document.querySelector("div[comfirm] .box button[cancel]").onclick = function () {
      document.querySelector("div[comfirm]").style.display = "none";
      document.querySelector("div[comfirm]").remove();
      if (failFn.length > 0) {
        failFn.forEach((fn) => {
          fn();
        });
      }
    };
    document.querySelector("div[comfirm] .box button[sure]").onclick = function () {
      document.querySelector("div[comfirm]").style.display = "none";
      document.querySelector("div[comfirm]").remove();
      if (successFn.length > 0) {
        successFn.forEach((fn) => {
          fn();
        });
      }
    };
  }
  function setCallback(config) {
    config.success && successFn.push(config.success);
    config.fail && failFn.push(config.fail);
  }
  return {
    show(config) {
      init(config);
    },
  };
})();
