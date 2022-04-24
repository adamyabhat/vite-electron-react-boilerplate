const fs = require('fs')
const contextBridge = require('electron').contextBridge

contextBridge.exposeInMainWorld('fs', fs)