const html = require("./tpl/index.tpl");
import { appendHTML } from "ifuncs";
export const Confirm = (function () {
  let successFn;
  let failFn;
  let closeFn;
  function init(config) {
    (successFn = []), (failFn = []),(closeFn = []);
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
      onClose()
    };
    document.querySelector("div[comfirm] .box button[sure]").onclick = function () {
      document.querySelector("div[comfirm]").style.display = "none";
      document.querySelector("div[comfirm]").remove();
      if (successFn.length > 0) {
        successFn.forEach((fn) => {
          fn();
        });
      }
      onClose()
    };
  }
  function setCallback(config) {
    config.success && successFn.push(config.success);
    config.fail && failFn.push(config.fail);
    config.close && closeFn.push(config.close);
  }

  function onClose() {
    if (closeFn.length > 0) {
      closeFn.forEach((fn) => {
        fn();
      });
    }
  }

  return {
    show(config) {
      init(config);
    },
  };
})();
