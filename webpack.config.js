var webpack = require("webpack");
module.exports = {
  entry: [
    "script!jquery/dist/jquery.min.js",
    "script!foundation-sites/dist/foundation.min.js",
    "./app/app.jsx"
  ],
  externals:{
   jquery:"jQuery"
  },
  plugins:[
    new webpack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery"
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: { //adding modules
      Main:'app/components/main.jsx',
      Nav : 'app/components/Nav.jsx',
      Weather:"app/components/Weather.jsx",
      About:"app/components/About.jsx",
      Example:"app/components/Example.jsx",
      WeatherMessage:"app/components/WeatherMessage.jsx",
      WeatherForm:"app/components/WeatherForm.jsx",
      openWeatherMap:"app/api/openweathermap.jsx",
      ErrorModal:"app/components/ErrorModal.jsx"
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
