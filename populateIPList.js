function populateIPList() {
    const ipSelect = document.getElementById("ip_id");

    // Clear existing options
    ipSelect.innerHTML = "<option value=''>Select your ID</option>";

    // Populate options from ipData
    for (const id in ipData) {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = id; // Displaying IP ID
        ipSelect.appendChild(option);
    }
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateIPList);
