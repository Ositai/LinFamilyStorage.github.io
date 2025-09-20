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
  fetch(`${scriptUrl}?action='search'&keyword=${formObject}`)
    .then(res => res.json())
    .then(tableData => {
      displayResult(tableData)
      console.log('get call back')
    })
    .catch(err => console.log('傳輸關鍵字時錯誤:', err))     
  return undefined  
}

// 通用表格header
const tableHeader = "<th scope='col'>項目名稱</th>"+
                    "<th scope='col'>庫存位置</th>"+
                    "<th scope='col'>庫存量</th>"+
                    "<th scope='col'>目標庫存</th>"+
                    "<th scope='col'>有效期限</th>"




