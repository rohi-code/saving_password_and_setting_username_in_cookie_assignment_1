document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  let count = getCookie('count');

  // 2 & 3. Update or create the cookie
  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }

  setCookie('count', count, 7); // expires in 7 days

  // 4. Display the count on the webpage
  const counterDiv = document.getElementById('counter');
  if (counterDiv) {
    counterDiv.textContent = `You have visited this page ${count} times.`;
  }
});
