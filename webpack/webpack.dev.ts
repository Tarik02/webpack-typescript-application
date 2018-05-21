import * as webpack from "webpack";
import * as merge from "webpack-merge";
import common from "./webpack.common";

const config: webpack.Configuration = {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
	},
};

export default merge(common, config);
