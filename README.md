# Photo_Gallery_JSON_files :smiley:

### Feature #1: Display images :alien:

1. Using AJAX, specifically `$.ajax()`, the provided JSON file will be read.
1. Each object becomes a new instance of a constructor function.
1. Referring to the data to determine the necessary properties.
1. Using jQuery to make a copy of the HTML template of the photo component. For each object, the duplicated template will be filled with its properties, then appending the copy to the DOM.

### Feature #2: Filter images :star2:

1. Createing a `<select>` element which contains unique `<option>` elements extracted dynamically from the JSON file, one for each keyword.
1. Using an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.

### Feature #3: Style the application :fire:

1. The application Styled using floats.

### Stretch Goal: Sort the images :scream_cat:

1. The user can sort the images by either title or by a number of horns.
1. Sort the images by one of the properties on page load. Also, this will be applied to the second page of images.
