// app config
const express = require('express');
const app = express()

// importing modules
const path = require('path');
const Prism = require('prismjs')
const { data } = require('./temp_data.js') // String

// Static files config
app.use('/public', express.static(path.join(__dirname, 'public')))

// Setting template engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// Routes 
app.get('/', (req, res) => {
    // Proccessing the html code
    const htmlStr = Prism.highlight(data, Prism.languages.javascript, 'javascript'); // String
    // Rendering index view
    res.render('index',{htmlStr});
})

// server listning
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
