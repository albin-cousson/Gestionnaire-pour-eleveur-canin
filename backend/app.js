const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Thing = require('./models/thing')

const app = express()

mongoose.connect('mongodb+srv://Albin:03120222@mycluster.akj1a.mongodb.net/MuCluster?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => {console.log('Connexion à la bdd: RÉUSSI')})
    .catch(() => {console.log('Connexion à la bdd: ECHEC')})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json())

app.post('/ajouter', (req, res, next) => {
    const thing = new Thing({
        ...req.body
    })
    thing.save()
        .then(() => {res.status(201).json({massage: "Data enregistrer"})})
        .catch((error) => {res.status(400).json(error)})
})


app.get('/afficher', (req, res, next) => {
    Thing.find()
    .then((response) => {res.status(200).json(response)})
    .catch((error) => {res.status(200).json(error)})
})

app.put('/update/:id', (req, res, next) => {
    Thing.update({_id: req.params.id}, {propre: true, _id: req.params.id})
    .then(() => {res.status(200).json({message: "Update réussi !"})})
    .catch((error) => {res.status(400).json(error)})
})

app.delete('/delete/:id', (req, res, next) => {
    Thing.deleteOne({_id: req.params.id})
    .then(() => {res.status(200).json({message: "Suppression réussi !"})})
    .catch((error) => {res.json(400).json(error)})
})

date = new Date()
jour = date.getDay()
console.log(jour)

module.exports = app 