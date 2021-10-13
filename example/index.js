import { YearPicker, Prompt, Confirm, PromptPC,Loading,Progress } from "../dist/nativeUI.min";

let prompt = Prompt();
let yearPicker = new YearPicker();

document.querySelector("[Prompt]").addEventListener("click", showPrompt);
document.querySelector("[YearPicker]").addEventListener("click", showYearPicker);
document.querySelector("[Confirm]").addEventListener("click", showConfirm);
document.querySelector("[PromptPc]").addEventListener("click", showPromptPC);
document.querySelector("[Loading]").addEventListener("click", showLoading);
document.querySelector("[Progress]").addEventListener("click", showProgress);

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


function showLoading(){
  Loading.show()
}


function showProgress(){
  let value = 0
  Progress.show()
  let update = setInterval(()=>{
    value+=1
    Progress.update(`${value}%`)
    if(value===100) clearInterval(update)
  },500)
}
