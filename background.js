// Use browser API if available (Firefox), otherwise fall back to chrome (Chrome/Safari)
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

// Create context menu item when extension is installed
browserAPI.runtime.onInstalled.addListener(() => {
  browserAPI.contextMenus.create({
    id: "archive-link",
    title: "Open in Archive.ph",
    contexts: ["link"]
  });
});

// Handle context menu clicks
browserAPI.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "archive-link" && info.linkUrl) {
    // Construct the archive.ph URL
    const archiveUrl = `https://archive.ph/${info.linkUrl}`;
    
    // Open in a new tab
    browserAPI.tabs.create({
      url: archiveUrl,
      active: true
    });
  }
});

