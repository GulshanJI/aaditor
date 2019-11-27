const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const webPage = path.join(__dirname, './webpage')
const partialPath = path.join(__dirname, './partial')
const port = process.env.PORT || 3000
app.set('view engine', 'hbs')
app.set('views', webPage)

hbs.registerPartials(partialPath)

app.get('', (req, res) => {
    res.render('index', {
        pagename: req.query.urname,
        myname: req.query.pagename
    })
})


app.listen(port, () => {
    console.log("Server is up on port 3000")
})