console.log("from the backgroud ")

chrome.tabs.onUpdated.addListner((tabId, tab) =>{
  if (tab.url && tab.url.includes("dhiwise.com")){
    chrome.tabs.sendMessage(tabId, {
      type: "new",
    })
  }
})