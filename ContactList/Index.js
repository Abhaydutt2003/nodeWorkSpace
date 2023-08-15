const express = require('express');
const path = require('path');
const port = 8000;
const bodyParser = require('body-parser');

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('assets'));


// app.use((request,response,next)=>{
//     request.my_name = "Abhay";
//     console.log("middleware 1 called");
//     next();
// })

// app.use((request,response,next)=>{
//     console.log(request.my_name);
//     console.log("Middleware 2 called");
//     next();
// })

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

// app.post('/create_contact', (request, response) => {
//     //return response.redirect('/practice');
//     // console.log(request.body);
//     // console.log(request.body.name);
//     // console.log(request.body.number);

//     // contactList.push({
//     //     name: request.body.name,
//     //     number: request.body.number
//     // });

//     // return response.redirect('/');

//     contactList.push(request.body);

//     return response.redirect('back');
// });

app.post('/create_contact', (request, response) => {
    Contact.create({
        name: request.body.name,
        number: request.body.number
    }, (error, newContact) => {
        if (error) {
            console.log('Error in creating a contact');
            return;
        } else {
            console.log('$$$$$$$$$$', newContact);
            return response.response('back');
        }
    })
});

app.get('/delete-contact/', function (request, response) {
    let number = request.query.number;
    let index = contactList.findIndex((contact) => {
        return contact.number == number;
    });
    if (index != -1) {
        contactList.splice(index, 1);
    }
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