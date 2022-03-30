exports.data = `// This is just a dummy code
var cors = require('cors')
const express = require('express')
const app = express()
const port = 3000

app.use(cors({
    origin: 'https://example.com/'
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send("Home route")
})

app.listen(process.env.PORT || port , () => {
    console.log('Example app listening on port {port}')
})
`