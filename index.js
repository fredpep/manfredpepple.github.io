




    function updateDateTime() {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const utcOffset = 1; // UTC+1
      const now = new Date();
      const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
      const localTime = new Date(utcTime.getTime() + utcOffset * 3600000);

      const hours = localTime.getHours().toString().padStart(2, '0');
      const minutes = localTime.getMinutes().toString().padStart(2, '0');
      const seconds = localTime.getSeconds().toString().padStart(2, '0');
      const currentDay = daysOfWeek[localTime.getDay()];

      const timeString = `${hours}:${minutes}:${seconds}`;
      const dayString = currentDay;

      document.getElementById('currentTimeUTC').textContent = timeString;
      document.getElementById('currentDay').textContent = dayString;
    }

    setInterval(updateDateTime, 1000); // Update the time every second
    updateDateTime(); // Initial call to display the time and day immediately