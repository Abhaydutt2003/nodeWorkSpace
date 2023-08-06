const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
        contact_list:contactList
    });
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