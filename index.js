const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
	res.status(200).send("<h1> Jaideep  </h1>");
});

app.get("/v1/instagram", (req, res) => {
	const user = {
		userName: 'Jaideep',
    followers: 1250,
    following: 90,
	};
	res.status(200).json(user);
});

app.get("/v1/linkedin", (req, res) => {
	const user = {
		userName: 'Jaideep',
    lastName: 'Poojary',
    followers: '1K',
    following: 90,
	};
	res.status(200).json(user);
});

app.get('/v1/:deepe', (req, res) => {
  res.status(200).json({ route: req.params.deepe})
});

app.listen(PORT, () => {
	console.log("Jaideep's server is running on PORT:", PORT);
});
