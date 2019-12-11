module.exports = {
	entry:'./app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Applicant: 'app/components/Applicant.jsx',
			ApplicantList: 'app/components/ApplicantList.jsx'

		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules)/
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	}

};
