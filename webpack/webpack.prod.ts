import * as webpack from "webpack";
import * as merge from "webpack-merge";
import common from "./webpack.common";

const config: webpack.Configuration = {
	mode: "production",
	devtool: "source-map",
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
	],
};

export default merge(common, config);
