// frontend.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.footer-form');
  const outputContainer = document.getElementById('output');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const response = await fetch('http://localhost:3000/api/book-table', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        alert("Booking successful");
      } else {
        console.error('Error:', response.statusText);
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });

  // Function to fetch and display data
  async function getData() {
    try {
      const response = await fetch('http://localhost:3000/api/bookings');
      const data = await response.json();
      console.log('Response:', data);
      displayData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Function to display data on the webpage as a table
  // Function to display data on the webpage as a table
function displayData(data) {
  outputContainer.innerHTML = ''; // Clear previous content

  const table = document.createElement('table');
  table.classList.add('booking-table');

  // Create table header
  const headerRow = table.insertRow();
  for (const key in data[0]) {
    if (data[0].hasOwnProperty(key) && key !== '__v' && key !== '_id') {
      const headerCell = document.createElement('th');
      headerCell.textContent = key.replace('_', ' ').toUpperCase();
      headerRow.appendChild(headerCell);
    }
  }

  // Create table rows
  data.forEach(booking => {
    const row = table.insertRow();
    for (const key in booking) {
      if (booking.hasOwnProperty(key) && key !== '__v' && key !== '_id') {
        const cell = row.insertCell();
        cell.textContent = booking[key];
      }
    }
  });

  // Append the table to the output container
  outputContainer.appendChild(table);
}


  // Initial data fetch when the page loads
  getData();
});
