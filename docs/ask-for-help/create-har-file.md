---
# sidebar_position: 10
pagination_next: null
pagination_prev: null
---

# What is and How to generate a HAR File? 
 
A HAR (HTTP Archive) file is a log of all network requests made by a web page in your web browser. It includes details about each request, such as the URL, response headers, request headers, and timings. Generating a HAR file is a useful troubleshooting tool because it provides a comprehensive snapshot of a web page's network activity, allowing for precise issue identification.

How to generate a HAR file: 
This tutorial covers Google Chrome, Microsoft Edge, and Mozilla Firefox.


## Step 1: Open the Developer Tools.

1. Open the Browser.
2. Press F12 on your keyboard to open Developer Tools.
Alternatively, right-click anywhere on the page and select "Inspect" or "Inspect Element."
For Chrome, you can also use the three-dot menu in the top-right corner of the browser > More tools > Developer tools.

## Step 2: Go to the "Network" Tab and check the Preserve log checkbox.

1. In the Developer Tools, you should see a set of tabs at the top. Click on the "Network" tab. 
2. Make sure the "Preserve log" checkbox is checked. This option keeps the network log intact even after a page refresh or navigation.
Optionally, you can clear the network log by clicking the "Clear" button. 


## Step 3: Reload the Page or Trigger the Actions.

To capture all network activity on the webpage, you'll need to reload the page or perform the specific actions that trigger the network requests you're interested in (e.g., submitting a form, clicking a link, etc.).


## Step 4: Stop Recording.

1. Once you've captured the network activity you need, return to the "Network" tab in Developer Tools. You should see a list of network requests made by the webpage.
2. Click the red "Stop" button (square icon) in the top-left corner of the "Network" tab to stop recording network activity. 
- Chrome and Edge: "Stop recording network" button
- Firefox: || 


## Step 5: Export the HAR File.

1. Right-click anywhere in the list of network requests.
2. Select "Save as HAR with content" (Chrome and Edge) or "Save All As HAR" (Firefox).
3. Choose a location on your computer to save the HAR file, give it a descriptive name, and click "Save."