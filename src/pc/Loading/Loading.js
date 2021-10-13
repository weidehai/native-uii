const html = require("./tpl/index.tpl");
import { appendHTML } from "ifuncs";
export const Loading = (function () {
  function init() {
    let tp = html();
    appendHTML(document.body, tp);
  }
  return {
    show() {
      init();
    },
  };
})();
