import {appendHTML} from "ifuncs"

const YearPicker = (function () {
  function YearPicker(startYear, endYear) {
    this.startYear = startYear;
    this.endYear = endYear;
    this.slider = null;
    this.slideDistance = 0;
    this.itemCount = endYear - startYear + 1;
    this.startItem = 4;
    this.perItemHeight = 30;
    this.instance = null;
    this.onConfirm = null;
    this.top = this.perItemHeight * (this.startItem - 1);
    this.bottom = -this.perItemHeight * (this.itemCount - this.startItem);
    this.init()
  }

  YearPicker.prototype.init = function () {
    this.setStyle();
    this.render();
    this.addEvent();
  };

  YearPicker.prototype.setStyle = function () {
    let style = document.createElement("style");
    style.innerText = `body {
      padding: 0;
      margin: 0;
    }
    div[mask]{
      height:100vh;
      width:100vw;
      background-color:#464e531c;
      position: absolute;
      top:0;
      left:0;
      display:none;
    }
    div[datepicker] {
      position: fixed;
      bottom: -240px;
      height: 240px;
      width: 100vw;
      transition: all 0.5s;
      background-color:white;
    }
    .box-shadow-bottom-1px {
      box-shadow: inset 0px -1px 1px -1px #c8c7cc;
    }
    .box-shadow-top-and-bottom-1px {
      box-shadow: inset 0px -1px 1px -1px #c8c7cc,inset 0px 1px 1px -1px #c8c7cc;
    }
    div[action] {
      height: 30px;
      display: flex;
      flex-direction: row;
      padding: 5px;
      box-sizing: border-box;
      color: #0bb3ffc2;
    }
    div[button] {
      flex: 1;
      text-align: center;
    }
    div[years] {
      height: 210px;
      overflow: hidden;
    }
    .slider {
      transition: all 0.3s;
    }
    .slider > div {
      text-align: center;
      height: 30px;
      line-height: 30px;
    }
    .selectedLine {
      position: absolute;
      height: 30px;
      width: 100vw;
      top: 120px;
      z-index: -999;
    }`;
    document.head.appendChild(style);
  };

  YearPicker.prototype.show = function () {
    document.querySelector("[datePicker]").style.bottom = "0";
    document.querySelector("[mask]").style.display = "block";
  };

  YearPicker.prototype.render = function () {
    let html = `<div mask></div><div datePicker>
        <div action>
            <div button cancle class="box-shadow-bottom-1px">取消</div>
            <div button confirm>确定</div>
        </div>
        <div years>
            <div class="slider">{{years}}</div>
        </div>
        <div class="selectedLine box-shadow-top-and-bottom-1px"></div>
    </div>`;
    html = html.replace(/{{years}}/, this.generateYears());
    appendHTML(document.body, html);
  };

  YearPicker.prototype.slide = function () {
    this.slider.style.transform = `translateY(${this.handleDistance(
      this.slideDistance
    )}px)`;
  };

  YearPicker.prototype.handleDistance = function (distance) {
    if (distance >= this.top) {
      distance = this.top;
    }
    if (distance < this.bottom) {
      distance = this.bottom;
    }
    return (this.slideDistance = distance);
  };

  YearPicker.prototype.generateYears = function () {
    let start = this.startYear;
    let end = this.endYear;
    let result = "";
    while (start <= end) {
      result += `<div>${start}</div>`;
      start++;
    }
    return result;
  };

  YearPicker.prototype.cancle = function () {
    this.close();
  };

  YearPicker.prototype.confirm = function () {
    selected = Math.abs(this.slideDistance / 30 - 3) + this.startYear;
    this.onConfirm && this.onConfirm(selected);
    this.close();
  };

  YearPicker.prototype.close = function () {
    document.querySelector("[datePicker]").style.bottom = "-240px";
    document.querySelector("[mask]").style.display = "none";
  };

  YearPicker.prototype.addEvent = function () {
    let start,
      end,
      self = this;
    this.slider = document.querySelector(".slider");
    this.slideArea = document.querySelector("[years]");
    document.querySelector("[mask]").onclick = this.close;
    document.querySelector("div[action]>div[cancle]").onclick = () => {
      this.cancle();
    };
    document.querySelector("div[action]>div[confirm]").onclick = () => {
      this.confirm();
    };
    function moveHanlder(e) {
      end = e.targetTouches[0].pageY;
    }
    function outHanlder(e) {
      let delta =
        Math.round((end - start) / self.perItemHeight) * self.perItemHeight;
      self.slideDistance = self.slideDistance + delta;
      self.slider.removeEventListener("touchmove", moveHanlder);
      self.slider.removeEventListener("touchend", outHanlder);
      self.slide();
    }
    this.slideArea.addEventListener("touchstart", (e) => {
      e.preventDefault();
      e.stopPropagation();
      start = e.targetTouches[0].pageY;
      this.slideArea.addEventListener("touchmove", moveHanlder);
      this.slideArea.addEventListener("touchend", outHanlder);
    });
  };

  function getInstance(startYear = 1947, endYear = 2021) {
    YearPicker.instance = new YearPicker(startYear, endYear)
    getInstance = function(){
      return YearPicker.instance
    }
    return getInstance();
  }
  return getInstance;
})();


export {YearPicker}