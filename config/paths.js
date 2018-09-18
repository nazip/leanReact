const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appRoot: appDirectory,  
  appAssets: resolveApp("src/css"), 
  appConfig: resolveApp("config"), 
  appDevHtmlTemplate: resolveApp("config/htmlTemplate/index.html"),
  appOutputDev: resolveApp("output/dev"),
  appIndexJs: resolveApp("src/index.js"), 
};