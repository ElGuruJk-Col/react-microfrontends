const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StandaloneSingleSpaPlugin = require("standalone-single-spa-webpack-plugin");

module.exports = (webpackConfigEnv = {}) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "people",
    webpackConfigEnv,
  });

  const config = webpackMerge.smart(defaultConfig, {
    // customizations go here
    devServer: {
      client: {
        port: 9000,
      },
    },
  });

  return config;
};
