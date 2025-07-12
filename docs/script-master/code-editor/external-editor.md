---
sidebar_position: 110
---

# Use external editor with live reloading

## Overview

If the [built-in editor](./index.md) does not fit your needs and you prefer to work in Visual Studio Code (VS Code) or a similar editor, you can use any external editor to modify your code and update it automatically in Script Master. This feature is called "External editor with live reloading".

import ReactPlayer from 'react-player';

<ReactPlayer controls width='100%' url='https://www.youtube.com/watch?v=veLxCZSDFNc' />

## How to use external editor with live reloading

1. First, make your code file available at "http://localhost" with any kind of "Live Server" functionality (see example below).
2. Then, in the Script Master editor, click the "External" button.
3. Paste the link to your file with the code and click "Connect".
4. The editor will become read-only and will start polling for updates every few seconds.
5. Now, you can fully switch to your IDE and continue to work on the script code there.
6. When it is ready to be executed, switch back to Script Master and "Run" your code.

:::warning

All the code in the editor will be replaced by the code from your IDE.

:::


## Example of live reloading with Visual Studio Code

1. Open a project with the file you would like to connect to the Script Master editor in Visual Studio Code.
2. Make it available on "localhost". You can use any extension to make this possible; one recommended extension is [https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
3. Now follow the steps from "How to use external editor with live reloading".
