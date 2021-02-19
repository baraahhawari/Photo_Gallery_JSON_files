# JSON_files_photo_gallery :smiley:

Create a photo gallery using the provided JSON files and styled it using floats.

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

---

### Feature 1: Pagination :grinning:

1. A navigation added for the user to switch between two pages. Each page will render a unique set of images from one of the two provided JSON files.
1. The filters will be populated using only keywords from the images currently being displayed.

### Feature 2: Templating :smirk:

1. The appropriate Mustache template created in the HTML with the same `<h2>`, `<img>`, and `<p>` elements as the jQuery template from the prior lab.
1. The method that renders the images refactored to use Mustache instead of making a copy with jQuery.

### Feature 3: Styling with Flexbox :smile:

1. The CSS refacored to use `Flexbox` instead of floats.

### Feature 4: Sort the images :green_heart:

1. The user will have the ability to sort the images by either title or by number of horns.
1. Sort the images by one of the properties on page load. This should also apply to the second page of images.

### Stretch Goal: Detail view :scream_cat:

1. Add a detail view which will display the image in a larger size in the center of the screen with a colored background.
1. The description should be shown now, as well.
   When the user clicks off of the image, return to the grid view.
1. Use a transition or animation to show and hide the detail view of an image.

### Stretch Goal: Fuzzy search :scream_cat:

1. Create an input element to allow users to search for an image. It is up to you and your partner to decide if the user should be able to search by title, keyword, or both.
1. Write a regular expression pattern to create a fuzzy search so that the results are narrowed down and displayed every time the user enters or removes a character from the input.
