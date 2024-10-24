const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});







// Function to handle translation
function translateField(englishInputId, marathiOutputId) {
  const englishName = document.getElementById(englishInputId).value;

  // If the English name input is empty, clear the Marathi field and return early
  if (!englishName.trim()) {
    document.getElementById(marathiOutputId).value = ''; // Clear the Marathi field
    return;
  }
  
  // Translation API URL
  const apiUrl = `https://api.mymemory.translated.net/get?q=${englishName}&langpair=en|mr`;
  
  // Fetch translation from API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Get translated text from API response
      const marathiName = data.responseData.translatedText;
      
      // Set translated name to Marathi input field
      document.getElementById(marathiOutputId).value = marathiName;
    })
    .catch(error => {
      console.error('Error:', error);
      // Show a user-friendly error message in Marathi field
      document.getElementById(marathiOutputId).value = "Translation Error!";
    });
}


function translateNumber(englishInputId, outputId) {
  const englishNumber = document.getElementById(englishInputId).value;

  // Mapping of English numerals to Marathi numerals
  const marathiNumerals = {
      '0': '०',
      '1': '१',
      '2': '२',
      '3': '३',
      '4': '४',
      '5': '५',
      '6': '६',
      '7': '७',
      '8': '८',
      '9': '९'
  };

  // Convert the English number to Marathi numeral
  const marathiNumber = englishNumber.split('').map(digit => marathiNumerals[digit] || digit).join('');
  
  // Set the converted number in the output field
  document.getElementById(outputId).value = marathiNumber;
}





        // DOUBL THE ROW 


    document.addEventListener('DOMContentLoaded', function() {
        // Event delegation for handling add and remove buttons
        document.querySelector('#rows-container').addEventListener('click', function(event) {
            // Add new row on clicking the plus button
            if (event.target.classList.contains('add-row')) {
                let newRow = event.target.closest('.my-row').cloneNode(true);

                // Reset input values in the cloned row
                newRow.querySelectorAll('input').forEach(function(input) {
                    input.value = '';
                });

                // Append the new row to the container
                document.querySelector('#rows-container').appendChild(newRow);
            }

            // Remove row on clicking the minus button
            if (event.target.classList.contains('remove-row')) {
                let rows = document.querySelectorAll('.my-row');
                
                // Only remove the row if more than one exists
                if (rows.length > 1) {
                    // Remove the closest row (the .my-row element)
                    event.target.closest('.my-row').remove();
                } else {
                    alert("At least one row must be present.");
                }
            }
        });
    });




    
    





































