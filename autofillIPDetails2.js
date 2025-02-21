document.addEventListener("DOMContentLoaded", function () {
    const ip1Dropdown = document.getElementById("ip1_id");
    const ip2Dropdown = document.getElementById("ip2_id");

    if (!ip1Dropdown || !ip2Dropdown) {
        console.error("❌ Dropdown elements not found. Check HTML IDs.");
        return;
    }

    ip1Dropdown.addEventListener("change", autofillIPDetails2);
    ip2Dropdown.addEventListener("change", autofillIPDetails2);
});

function autofillIPDetails2(event) {
    const ipId = event.target.value; // Get selected IP ID
    const fieldPrefix = event.target.id.replace("_id", ""); // Extract prefix (ip1 or ip2)

    // Get related fields
    const nameField = document.getElementById(`${fieldPrefix}_name`);
    const callsignField = document.getElementById(`${fieldPrefix}_callsign`);
    const positionField = document.getElementById(`${fieldPrefix}_position`);

    if (!nameField || !callsignField || !positionField) {
        console.error(`❌ Fields for ${fieldPrefix} not found.`);
        return;
    }

    if (typeof ipData === "undefined") {
        console.error("❌ ipData is not loaded. Ensure ipData.js is included first.");
        return;
    }

    if (ipData[ipId]) {
        nameField.value = ipData[ipId].name;
        callsignField.value = ipData[ipId].callsign;
        positionField.value = ipData[ipId].position;
    } else {
        nameField.value = "";
        callsignField.value = "";
        positionField.value = "";
    }
}
