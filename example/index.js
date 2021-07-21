import {YearPicker,Prompt} from '../dist/nativeUI.min'

let prompt = Prompt();
let yearPicker = new YearPicker();


document.querySelector('[Prompt]').addEventListener('click',showPrompt)
document.querySelector('[YearPicker]').addEventListener('click',showYearPicker)
function showPrompt() {
  prompt.show("prompt组件测试");
}
function showYearPicker() {
  yearPicker.show();
}
