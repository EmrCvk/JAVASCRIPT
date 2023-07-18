let myName = prompt("Lütfen adınızı soyadınızı giriniz.")

var isim = document.getElementById("myName") 

isim.innerHTML = myName;



function showTimeAndDate() {
    const now = new Date();
  
    // Get the components of the current date and time
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are zero-based, so we add 1
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Format the date and time as a string
    const dateString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
    // Display the time and date
    console.log(`Current Date: ${dateString}`);
    console.log(`Current Time: ${timeString}`);
  }
  
  // Call the function to display the time and date
  showTimeAndDate();
  