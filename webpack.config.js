const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

function optimization() {
	const config = {
		splitChunks: {
			chunks: 'all',
		},
	}

	if (isProd) {
		config.minimizer = [
			new CssMinimizerWebpackPlugin(),
			new TerserWebpackPlugin(),
		]
	}

	return config
}

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`)

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
		assetModuleFilename: 'img/[name][ext]',
	},
	resolve: {
		extensions: ['.js', '.json', '.css', '.sass', '.scss'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@comp': path.resolve(__dirname, 'src/components'),
			'@sass': path.resolve(__dirname, 'src/sass'),
			'@sections': path.resolve(__dirname, 'src/styles/sections'),
		},
	},

	optimization: optimization(),

	devServer: {
		watchFiles: ['src/*.html'],
		hot: isDev,
	},

	// devtool: isDev ? 'source-map' : 'hidden',

	plugins: [
		// HTMLWebpackPlugin
		new HTMLWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: isProd,
			},
		}),
		//

		// CleanWebpackPlugin
		new CleanWebpackPlugin(),
		//

		// CopyWebpackPlugin
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/favicon.ico'),
					to: path.resolve(__dirname, 'dist'),
				},
			],
		}),
		//
		new MiniCssExtractPlugin({
			filename: filename('css'),
		}),
	],

	module: {
		rules: [
			{
				test: /\.(html)$/,
				use: ['html-loader'],
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name][ext]',
				},
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',
				},
			},
			{
				test: /\.xml$/,
				use: ['xml-loader'],
			},
			{
				test: /\.csv$/,
				use: ['csv-loader'],
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
}
