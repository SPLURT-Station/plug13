# Plug13 DM

### `_defines.dm`
File that should be placed higher in the hierarchy so that all defines described there are available.
Contains macros for easier use of Plug13.

### `_plug13.dm`
Connects all files in the `code/` folder.
Turns the project into a drag-n-drop solution.
*(At least within servers with configuration like on BlueMoon)*

### `Plug13.tsx`
The interface itself, which should be enough to copy-paste into `tgui/packages/tgui/interfaces/` and everything should work. But this is not certain.

### `code/client.dm`
Binds `/datum/plug13_connection` to each client, allowing connection by code.
Also adds the "Plug13" verb to the OOC tab, opening the connection interface by code.

### `code/config.dm`
Uses BlueMoon server configuration.
Since it's done differently on different servers, there won't be a universal config file here.

### `code/plug13.dm`
Implementation of `/datum/plug13_connection`. The procedure you're interested in is probably `proc/send_emote`.
With `send_emote`, data about what happened in the game is sent and an action is triggered on the site.

### `code/tgui.dm`
Everything related to TGUI
