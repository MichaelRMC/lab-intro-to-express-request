const express = require("express");
const app =express();


app.get("/:verb/:adjective/:noun", (req, res) => {
	const {verb, adjective, noun} = req.params;
	const projectName = `${verb}-${adjective}-${noun}`
	const responseText = `Congratulations on starting a new project called ${projectName}!`
	res.send(responseText);
});



module.exports = app;

