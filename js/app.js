'use strict';

// Global Array
var hornsKeyWords = [];
AnimalCard.all = [];

// Constructor for all animals
function AnimalCard(data) {
  this.image_url = data.image_url;
  this.title = data.title;
  this.keyword = data.keyword;
  this.description = data.description;
  this.horns = data.horns;
  // all
  AnimalCard.all.push(this);
  // unique keywords
  if (!hornsKeyWords.includes(this.keyword)) {
    hornsKeyWords.push(this.keyword);
  }
}

// render the data prototype function
AnimalCard.prototype.render = function () {
  // Mustache 
  let picsTemplate = $('#theTemplate').html();
  //  append to the main container in the HTML
  $('main').append(Mustache.render(picsTemplate, this));
}


// keyword selections
function thekeyWords() {
  hornsKeyWords.forEach(element => {
    let theKey = new Thekey(element);
    Thekey.all.push(theKey);
  });
  Thekey.all.forEach(element => {
    let theOption = $('#option').html();
    $('#selectMenu').append(Mustache.render(theOption, element));
  })
}

// keywords constructor
function Thekey(ele) {
  this.keyOption = ele;
}

// array
Thekey.all = [];

// reading info from 2 JSONs pages function
function thePages() {
  $('button').on('click', function () {
    let pageAttr = $(this).attr('id');
    // console.log(pageAttr);
    $('div').remove();
    hornsKeyWords = [];
    AnimalCard.all = [];
    Thekey.all = [];
    renderPage(`./data/${pageAttr}.json`);
  })
}
thePages();

// rendering the options in the select tag
function selectOption() {
  $('#selectMenu').on('change', function () {
    let selected = $(this).val();
    // console.log(selected);
    $('div').hide();
    if (selected === 'default') {
      $('div').show();
    }
    AnimalCard.all.forEach(element => {
      if (element.keyword === selected) {
        $(`.${selected}`).show();
      }
    })
  })
}

// Sorting function
function sortFun() {
  $('#sortBy').on('click', function () {
    if ($('#sortBy').val() === 'title') {
      console.log('title');
      theAlgorithm(AnimalCard.all, 'title');
    } else if ($('#sortBy').val() === 'horns') {
      console.log('horns');
      theAlgorithm(AnimalCard.all, 'horns');
    }
  })
}

// sorting Algorithm
function theAlgorithm(arr, val) {
  arr.sort((a, b) => {
    let first = a[val];
    let second = b[val];

    if (first < second) {
      return -1;
    } else if (first > second) {
      return 1;
    } else {
      return 0;
    }
  })
  $('div').remove();
  AnimalCard.all.forEach(ele => {
    ele.render();
  })
}

//// Reading Data Ajax JSON files
function renderPage(JSONData) {
  $.get(JSONData).then(data => {
    data.forEach(element => {
      let newAnimal = new AnimalCard(element);
      // console.log(newAnimal);
      newAnimal.render();
    });
    thekeyWords();
    selectOption();
    sortFun();
  })
}

// calling funciton
$('document').ready(renderPage(`data/page-1.json`));