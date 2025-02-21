function populateIPList2() {
    const ip1Select = document.getElementById("ip1_id");
    const ip2Select = document.getElementById("ip2_id");

    if (!ip1Select || !ip2Select) {
        console.error("? One or both dropdowns not found. Check HTML.");
        return;
    }

    if (typeof ipData === "undefined") {
        console.error("? ipData is not loaded. Ensure ipData.js is included before this script.");
        return;
    }

    console.log("? ipData Loaded Successfully", ipData);

    // Clear existing options
    ip1Select.innerHTML = "<option value=''>Select your ID</option>";
    ip2Select.innerHTML = "<option value=''>Select your ID</option>";

    // Populate options from ipData
    for (const id in ipData) {
        const option1 = document.createElement("option");
        option1.value = id;
        option1.textContent = id;
        ip1Select.appendChild(option1); // Add to first dropdown

        const option2 = document.createElement("option");
        option2.value = id;
        option2.textContent = id;
        ip2Select.appendChild(option2); // Add to second dropdown
    }

    console.log("? ip1_id options:", ip1Select.innerHTML);
    console.log("? ip2_id options:", ip2Select.innerHTML);
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateIPList2);
