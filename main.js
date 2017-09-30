"use strict";
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on("window-all-closed", () => {
  if (process.platform != "darwin")
    app.quit();
});

app.on("ready", () => {

  // ブラウザ(Chromium)の起動, 初期画面のロード
  // ctr + shift + I -> ctr + shift + Rでデバッグだ！！！
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({width: 128, height: 128, x: width, y: height, frame: false});
  mainWindow.loadURL(`file://${__dirname}/views/index.html`);
  mainWindow.setAlwaysOnTop(true);
  electron.screen.getPrimaryDisplay().workAreaSize
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
