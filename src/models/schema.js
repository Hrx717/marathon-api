const express = require('express');
const mongoose = require('mongoose');

//create schema
const docSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type:Date,
        required:true,
        trim:true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true
    },
    event: {
        type: String,
        default: "100m"
    }
})

//create collection
const Ranking = new mongoose.model("Ranking",docSchema);

module.exports = Ranking;