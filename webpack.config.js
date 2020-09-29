const path = require('path')

module.exports = {
	entry: path.resolve('./client/index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/build/',
		filename: 'bundle.js'
	},
	mode: process.env.NODE_ENV,
	devServer: {
		contentBase: path.join(__dirname, 'client'),
		publicPath: '/build/',
		proxy: {
			'/api': 'http://localhost:3000',
		},
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
}