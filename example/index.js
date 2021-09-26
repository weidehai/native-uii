import { YearPicker, Prompt, Confirm, PromptPC } from "../dist/nativeUI.min";

let prompt = Prompt();
let yearPicker = new YearPicker();

document.querySelector("[Prompt]").addEventListener("click", showPrompt);
document.querySelector("[YearPicker]").addEventListener("click", showYearPicker);
document.querySelector("[Confirm]").addEventListener("click", showConfirm);
document.querySelector("[PromptPc]").addEventListener("click", showPromptPC);
function showPrompt() {
  prompt.show("prompt组件测试");
}
function showYearPicker() {
  yearPicker.show();
}
function showConfirm() {
  Confirm.show({
    title: "提示",
    content: "是否需要删除本条记录",
    height: (window.innerHeight-17)+ "px",
    width: (window.innerWidth-17) + "px",
    success: () => {
      console.log("success");
    },
    close:()=>{
      console.log('close');
    }
  });
}

function showPromptPC() {
  PromptPC.show({
    content: "是否需要删除本条记录",
  });
}
