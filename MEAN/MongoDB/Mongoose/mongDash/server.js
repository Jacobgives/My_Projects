const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 8888;

const app = express();


app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/conspiracy');

var RavenSchema = new mongoose.Schema({
    name: String
}, {timestamps:true})

mongoose.model('Raven', RavenSchema);
var Raven = mongoose.model('Raven')

mongoose.Promise = global.Promise;

// const allUsers = [
//     {
//         name: 'Phil',
//         location: 'Tulsa',
//         language: 'JavaScript',
//         comment: 'JS rocks!!!'
//     }
// ];

// ES6 arrow function
app.get('/', (req, res)=>{
  Raven.find({}).then((conspiracy)=>{
    res.render('index', {conspiracy:conspiracy});
  }).catch((errors)=>{
    console.log(errors);
    res.send('The conspiracy has either been organized or referenced improperly.');
  });
});

app.post('/conspiracy', (req, res)=>{
  console.log('enter conspiracy post, or creation route')
    var raven = new Raven({name: req.body.name});
    console.log(req.body);
    raven.save().then(()=>{
      res.redirect('/');
    }).catch((errors)=>{
      console.log(errors);
      res.redirect('/');
    });
});
app.get('/conspiracy/add', (req, res)=>{
      res.render('add_edit');
});
app.get('/conspiracy/:id',(req,res)=>{
  console.log('enter view get')
    Raven.find({_id:req.params.id}).then((raven)=>{
      res.render('view', {raven:raven[0]});
    }).catch((errors)=>{
      console.log(errors);
      res.send('There is no such conspirator');
    });
});
app.get('/conspiracy/edit/:id', (req, res)=>{
  console.log(req.params.id);
    Raven.find({_id:req.params.id}).then((raven)=>{
      console.log(raven);
      res.render('add_edit', {raven:raven[0]});
    }).catch((errors)=>{
      console.log(errors);
      res.send('There is no such conspirator');
    });
});
app.post('/conspiracy/destroy/:id',(req,res)=>{
  Raven.remove({_id:req.params.id}).then(()=>{
    res.redirect('/');
  }).catch((errors)=>{
    console.log(errors);
    res.redirect('/');
  });
});
app.post('/conspiracy/:id', (req,res)=>{
  console.log('enter edit post')
  console.log(req.params.id);
  console.log(req.body.name);
  Raven.find({_id:req.params.id}).then((resp)=>{
    console.log(resp[0]);
    resp[0].name=req.body.name;
    return resp[0].save()
  }).then((resp)=>{
    res.redirect('/');
  }).catch((errors)=>{
    console.log(errors);
    res.redirect('/');
  });
});
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`)});
