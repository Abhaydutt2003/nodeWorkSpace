const express = require('express');
const path = require('path');
const port = 8000;
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));

var contactList = [
    {
        name: "Abhay",
        number: "234234234"
    },

    {
        name: "Ankita",
        number: "984576987345"
    },

    {
        name: "random",
        number: "934856789435"
    }
];

app.get('/', (request, response) => {
    return response.render('home', {
        title: "Contact List",
        contact_list: contactList
    });
});

app.post('/create_contact', (request, response) => {
    //return response.redirect('/practice');
    // console.log(request.body);
    // console.log(request.body.name);
    // console.log(request.body.number);

    // contactList.push({
    //     name: request.body.name,
    //     number: request.body.number
    // });

    // return response.redirect('/');

    contactList.push(request.body);

    return response.redirect('back');
});


app.get('/practice', (request, response) => {
    return response.render('practice', {
        title: "play ejs"
    })
});



app.listen(port, function (error) {
    if (error) {
        console.log(error);
        return;
    }
    console.log("The server is running on port :", port);
});