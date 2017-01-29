// version :1
// Supports only LeetCode now

chrome.browserAction.onClicked.addListener(function(activeTab) {
    // Leet code random problem chooser. 
    var newURL = "https://leetcode.com/problems/random-one-question/algorithms";
    chrome.tabs.create({ url: newURL });
});
