# Wiki Search

This project is a simple web application that allows users to search for Wikipedia articles by typing a keyword and pressing Enter. The application fetches the search results using the Wikipedia API and displays them on the page.

## Project Structure

- `index.html` - The main HTML file that contains the structure of the web page.
- `index.css` - The CSS file that styles the web page.
- `index.js` - The JavaScript file that handles the search functionality and interaction with the Wikipedia API.

## Files Description

### index.html

The HTML file contains the following main elements:
- A header with the Wikipedia logo and a search input field.
- A spinner element that is displayed while the search results are being fetched.
- A container for displaying the search results.

### index.css

The CSS file includes styles for:
- The main container and header.
- The search input field.
- The search results and individual result items.

### index.js

The JavaScript file includes:
- Event listener for the search input field to trigger a search when the Enter key is pressed.
- Function to fetch search results from the Wikipedia API.
- Functions to display the fetched results on the web page.

## Usage

1. Clone the repository or download the files.
2. Open `index.html` in your web browser.
3. Type a keyword into the search input field and press Enter.
4. The search results will be fetched from Wikipedia and displayed on the page.

## Dependencies

The project uses the following external libraries and resources:
- Bootstrap 4.5.2 for styling.
- jQuery 3.5.1 for simplifying DOM manipulation.
- Popper.js 1.16.1 for positioning popovers.

These dependencies are included via CDN links in the `index.html` file.

## Notes

- Ensure you have an active internet connection to load the external libraries and fetch data from the Wikipedia API.
- The search results are fetched using the Wikipedia API endpoint `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={query}&format=json&origin=*`.

## License

This project is open-source and available under the MIT License.
