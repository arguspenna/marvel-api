const express = require('express');
const path = require('path');
// const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/dist/`));

app.get('/*', (req, res) => {
res.sendFile(path.join(__dirname,"/dist/index.html"));
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });