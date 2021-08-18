const html = require("./tpl/index.tpl");
import { appendHTML } from "ifuncs";
export const PromptPC = (function () {
  function init(config) {
    let tp = html(config);
    appendHTML(document.body, tp);
    setTimeout(function () {
      document.querySelector('div.prompt').remove()
    },2000)
  }
  return {
    show(config) {
      init(config);
    },
  };
})();
