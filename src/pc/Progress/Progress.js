const html = require("./tpl/index.tpl");
import { appendHTML } from "ifuncs";
export const Progress = (function () {
  let progressValue = null;
  function init() {
    let tp = html();
    appendHTML(document.body, tp);
    progressValue = document.querySelector(".progress-value");
  }
  function update(value) {
    progressValue.innerText = value;
  }
  return {
    show() {
      init();
    },
    update,
  };
})();
