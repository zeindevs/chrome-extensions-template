chrome.runtime.onInstalled.addListener((details) => {
	if (details.reason === 'install') {
		chrome.tabs.create({ url: 'welcome.html' })
	}
})

chrome.runtime.onStartup.addListener(() => {})

chrome.tabs.onActivated.addListener(({ tabId }) => {
	console.log(`tab onActivated ${tabId}`)
})

chrome.tabs.onRemoved.addListener((tabId) => {
	console.log(`tab onRemoved ${tabId}`)
})

chrome.runtime.onMessage.addListener((msg) => {
	console.log(msg)
})
