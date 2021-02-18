'use strict';

// Global Array
var hornsKeyWords = [];
AnimalCard.all = [];

// Constructor

function AnimalCard(data) {
  this.image_url = data.image_url;
  this.title = data.title;
  this.keyword = data.keyword;
  this.description = data.description;
  this.horns = data.horns;

  hornsKeyWords.push(this.keyword);
  AnimalCard.all.push(this);
}

// render the data prototype function
AnimalCard.prototype.render = function () {
  // clone the template to avoid re-appending more than once (class of the div that contain the template) jQuery
  let picsTemplate = $('.horn-template').clone();

  // find and set value into the markup
  picsTemplate.find('h3').text(this.title);
  picsTemplate.find('img').attr('src', this.image_url);
  picsTemplate.find('p').text(this.description);

  // remove the class from the origin template to get the cloned one
  picsTemplate.removeClass('horn-template');

  // give each div a class to help to made the selection
  picsTemplate.addClass(this.keyword);

  //  append to the main container in the HTML
  $('main').append(picsTemplate);
}

// rendering the options in the select tag
function selectOption() {
  AnimalCard.all.forEach(hornPic => {
    //check if the keyword is not douplicated to render it
    if (!AnimalCard.all.includes(hornPic.keyword)) {
      AnimalCard.all.push(hornPic.keyword);
      //append the option to the select
      $('#selectMenu').append(
        `<option value='${hornPic.keyword}'> ${hornPic.keyword} </option>`
      );
    }
  });
}

// show the selected items only
$('#selectMenu').on('change', function () {
  //like the event listener
  let selected = $(this).val();
  // hide all the dives
  $('.templateId').hide();
  // show only the selected ones with fadein animation (.)=> for the class added before
  $(`.${selected}`).fadeIn(900);
});

// Reading Data Ajax
function readData() {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };

  $.ajax('data/page-1.json', ajaxSettings)
    .then(data => {
      // console.log(data);
      data.forEach(element => {
        let animal = new AnimalCard(element);
        // console.log(animal, 'hello');
        animal.render();
      });
      selectOption();
    });
}

// calling funcitons
$('document').ready(readData);