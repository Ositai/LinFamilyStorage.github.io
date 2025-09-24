/* 完全前端版本
// 按鈕連結其他頁面   
function linkToAdd(name){
  let linkUrl = `https://ositai.github.io/LinFamilyStorage.github.io/LinFamiStorage/${name}.html`
  window.top.location.href = linkUrl;
  return undefined
}      

// apps script 網址
const scriptUrl = 'https://script.google.com/macros/s/AKfycbxlKyOkYISMfd95NMtxd-koIEyjldzzDV3wPd2OY5ztN_1h_RWOlnQCM1yVVLrmxFk2/exec'

// 送出物品名比對既有庫存，有回應則呼叫displayResult產生表格
function formSender(formObject){  
  let objName = encodeURIComponent(formObject.value)
  const url = `${scriptUrl}?keyword=${objName}&callback=displayResult`
  
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
  console.log('get callback')
  return undefined  
}


// 通用表格header
const tableHeader = "<th scope='col'>項目名稱</th>"+
                    "<th scope='col'>庫存位置</th>"+
                    "<th scope='col'>庫存量</th>"+
                    "<th scope='col'>目標庫存</th>"+
                    "<th scope='col'>有效期限</th>"

*/


// 按鈕連結其他頁面   
function linkToAdd(name){

  let linkUrl = `${window.APP_URL}?page=${name}`
  window.top.location.href = linkUrl;
  return undefined
}      

// 送出物品名比對既有庫存，有回應則呼叫displayResult產生表格
function formSender(formObject){
  let objName = formObject.value
  console.log(objName)
  
  google.script.run
    .withSuccessHandler(displayResult)
    .textCarrier(objName);      
  return undefined  
}

// 通用表格header
const tableHeader = "<th scope='col'>項目名稱</th>"+
                    "<th scope='col'>庫存位置</th>"+
                    "<th scope='col'>庫存量</th>"+
                    "<th scope='col'>目標庫存</th>"+
                          "<th scope='col'>有效期限</th>"



