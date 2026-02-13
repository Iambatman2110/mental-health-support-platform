const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'MindHaven - Your Safe Space',
        message: 'You are not alone.'
    });
});

app.get('/activities', (req, res) => {
    res.render('activities', {
        title: 'Activities & Gatherings - MindHaven'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us - MindHaven'
    });
});

app.get('/j', (req, res) => {
    res.render('j', {
        title: 'Health Insight - MindHaven'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
