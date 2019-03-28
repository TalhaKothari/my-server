const express = require('express')
const app = express()

app.get('/', function (req, res) {
	console.log("i received somehting");
  	res.send('Hello Fish World!')
})


app.get('/what', function (req, res) {
	console.log("i received what");
  	res.send('What!')
})




app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})
