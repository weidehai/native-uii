import {appendHTML} from "ifuncs"

const Prompt = (function () {
  /**
   * @desc: 构造函数
   * @return
   */
  function Prompt() {
    this.init();
  }

  /**
   * @desc: 新建组件
   */
  Prompt.prototype.init = function () {
    this.setStyle();
    this.render();
  };

  /**
   * @desc: 样式，设置css
   */
  Prompt.prototype.setStyle = function () {
    let style = document.createElement("style");
    style.innerText = `div[promptBox-y] {
            position: absolute;
            top: 48%;
            width: 100vw;
            text-align: center;
            z-index: 100;
        }
        span[prompt-y] {
            margin: 0 auto;
            background: #333333;
            opacity:0.8;
            color: white;
            padding: 2vw 3vw;
            font-size: 3vw;
            border-radius: 0.8vw;
            display: none;
        }`;
    document.head.appendChild(style);
  };

  /**
   * @desc: 渲染，编辑html
   */
  Prompt.prototype.render = function () {
    let html = `<div promptBox-y>
            <span prompt-y></span>
        </div>`;
    appendHTML(document.body, html);
  };

  /**
   * @desc: 显示
   * @param {String} content 提示内容
   * @param {Number} delayTime=null 延时时间，若没有传入此参数则不会自动隐藏
   */
  Prompt.prototype.show = function (content, delayTime = null) {
    // 插入内容

    document.querySelector("[prompt-y]").innerHTML = content;
    // 计算宽度
    document.querySelector("[prompt-y]").style.width =
      content.length * 4 + "vw";
    document.querySelector("[prompt-y]").style.display = "block";

    // 若存在在一定时间后自动隐藏
    if (delayTime) {
      this.close(delayTime);
    }
  };

  /**
   * @desc: 隐藏
   * @param {Number} delayTime 延时时间
   */
  Prompt.prototype.close = function (delayTime) {
    setTimeout(function () {
      document.querySelector("[prompt-y]").style.display = "none";
    }, delayTime);
  };

  /**
   * @desc: 解决重复创建问题
   * 若存在Prompt对象，则返回已存在的Prompt对象
   * 若不存在Prompt对象，则新建Prompt对象并返回新建的对象
   * @param {String} content 提示内容
   * @return {Prompt} Prompt对象
   */
  function getInstance() {
    Prompt.instance = new Prompt()
    getInstance = function(){
      return Prompt.instance
    }
    return getInstance();
  }
  return getInstance;
})();

export { Prompt };
