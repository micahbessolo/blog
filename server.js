const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) =>{
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        desription: 'Test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        desription: 'Test description 2'
    }]
    res.render('index', { articles: articles })
})

app.listen(3000)