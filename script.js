function date() { 
  const now = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day= daysOfWeek[now.getDay()];
  const MonthsOfYear = ['January', 'February', 'March ', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' , 'December'];
  const year = now.getFullYear();
  const month =  MonthsOfYear[now.getMonth()];
  
  
  const date = now.getDate().toString().padStart(2, '0');
  //display
  const dateString = `${day}  ${date} ${month} ${year}`;
  document.getElementById('date').textContent = dateString;
}
date();


function updateTime() {
  const now = new Date();
  console.log(now.toString())
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();
