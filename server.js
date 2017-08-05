const express = require('express');
const app = express();
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname)));
app.use('/styles', express.static(__dirname));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
