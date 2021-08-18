let express = require(`express`);
let app = express();

const PORT = 8080;

app.get('*', function (req, res, next) {
  res.send(`Under Construction by Emdog's Em-Dogs!`);
})
 
app.listen(`${PORT}`, function () {
  console.log(`The website server is running on ${PORT}`);
})