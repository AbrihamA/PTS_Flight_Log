function calculateDuration() {
    const timeIn = document.getElementById('time_in').value;
    const timeOut = document.getElementById('time_out').value;
    const durationField = document.getElementById('flight_duration');

    // Ensure both time inputs are provided
    if (!timeIn || !timeOut) {
        durationField.value = "Invalid Input";
        return;
    }

    // Convert time strings (HH:MM) into [hours, minutes] numbers
    const [hoursIn, minutesIn] = timeIn.split(':').map(Number);
    const [hoursOut, minutesOut] = timeOut.split(':').map(Number);

    // Create UTC date objects to avoid timezone issues
    let startTime = Date.UTC(1970, 0, 1, hoursIn, minutesIn);
    let endTime = Date.UTC(1970, 0, 1, hoursOut, minutesOut);

    // Handle overnight flights (e.g., 23:30 - 01:15)
    if (endTime < startTime) {
        endTime += 24 * 60 * 60 * 1000; // Add 24 hours in milliseconds
    }

    // Calculate the difference in milliseconds
    const diffMs = endTime - startTime;

    // Convert to hours and minutes
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    // Ensure consistent 24-hour format display
    const formattedHours = diffHrs.toString().padStart(2, '0'); // Always two digits (e.g., 03, 12)
    const formattedMinutes = diffMins.toString().padStart(2, '0'); // Always two digits

    // Display the duration in HH:MM 24-hour format
    durationField.value = `${formattedHours}:${formattedMinutes}`;
}