import * as CleanWebpackPlugin from "clean-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			title: "WebPack TypeScript application",
		}),
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "../dist"),
	},
};

export default config;
