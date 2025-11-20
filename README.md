# Archive.ph Safari Extension

>[!IMPORTANT]
> This is for educational purposes only. This shows how easy it is to put link to open in via the right hand click.

A Safari extension that allows you to right-click on any link and open it via archive.ph.

## Features

- Right-click on any link to see "Open in Archive.ph" option
- Automatically opens the link in a new tab via archive.ph

## Installation

### Direct Installation (Development)

1. Open Safari and go to **Safari > Settings > Advanced**
2. Check "Show Develop menu in menu bar"
3. Go to **Develop > Developer Settings**
4. Click the ***Add Temporary Extension...***
5. Navigate to this folder and select it
6. Click **Enable** to enable the extension
7. You'll need to "Allow all websites" in the top

## Usage

1. Right-click on any link on a webpage
2. Select "Open in Archive.ph" from the context menu
3. A new tab will open with the link archived via archive.ph

## Development

This extension uses the WebExtensions API, which is compatible with:
- Safari 14+
- Chrome/Edge (for testing)
- Firefox (for testing)

## Files

- `manifest.json` - Extension manifest file (WebExtensions format)
- `background.js` - Background service worker that handles context menu clicks
- `test.html` - Test page with sample links to verify the extension works
- `README.md` - This file

## Icons

The manifest references icon files (`icon-16.png`, `icon-48.png`, `icon-128.png`). You'll need to create these icons for the extension to work properly. You can:

1. Create simple PNG icons (16x16, 48x48, 128x128 pixels)
2. Use an online icon generator
3. Temporarily remove the `icons` section from `manifest.json` for testing (though Safari may show warnings)

## Notes

- The extension requires permissions for `contextMenus` and `tabs`
- It only appears in the context menu when right-clicking on links
- The archive.ph URL format is: `https://archive.ph/<original-url>`

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for details.

