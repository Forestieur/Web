'use strict'
const port = process.env.PORT || 3000
const express = require('express')
const path = require('path')




const app = express()

// view engine setup

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'static')))
app.get('/lab1', function (request,responce) {
responce.sendFile(path.join(__dirname, 'static/WebJS1.html'))
})
app.get('/lab2', function (request,responce) {
    responce.sendFile(path.join(__dirname, 'static/WebJS2.html'))
})
app.get('/lab3', function (request,responce) {
    responce.sendFile(path.join(__dirname, 'static/WebJS3.html'))
})
app.get('/lab4', function (request,responce) {
    responce.sendFile(path.join(__dirname, 'static/WebJS4.html'))
})
app.get('/lab5', function (request,responce) {
    responce.sendFile(path.join(__dirname, 'static/WebJS5.html'))
})
app.get('/lab6', function (request,responce) {
    responce.sendFile(path.join(__dirname, 'static/WebJS6.html'))
})
app.get('/lab7', function (request,responce) {
    responce.sendFile(path.join(__dirname, 'static/WebJS7.html'))
})
app.get('/lab8', function (request,responce) {
    responce.sendFile(path.join(__dirname, 'static/WebJS8.html'))
})
app.get('/lab9', function (request,responce) {
    responce.sendFile(path.join(__dirname, 'static/WebJS9.html'))
})
app.get('/lab10', function (request,responce) {
    responce.sendFile(path.join(__dirname, 'static/WebJS10.html'))
})
app.get('/lab11', function (request,responce) {
    responce.sendFile(path.join(__dirname, 'static/WebJS11.html'))
})
app.get('/lab12', function (request,responce) {
    responce.sendFile(path.join(__dirname, 'static/WebJS12.html'))
})
app.get('/', function (request,responce) {
    responce.sendFile(path.join(__dirname, 'static/WebJS1.html'))
})
app.listen(port)

