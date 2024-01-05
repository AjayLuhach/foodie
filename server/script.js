// script.js

async function getData() {
    try {
      const response = await fetch('http://localhost:3000/api/');
      console.log('Response:', response);
    const data = await response.json();
    document.getElementById('output').innerText = JSON.stringify(data);
  } catch (error) {
    console.error('Error:', error);
    }
  }
  
// frontend.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.footer-form');
  
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
  });
  