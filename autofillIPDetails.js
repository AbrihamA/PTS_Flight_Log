function autofillIPDetails() {
    const ipId = document.getElementById("ip_id").value;
    const ipNameField = document.getElementById("ip_name");
    const ipCallsignField = document.getElementById("ip_callsign");
    const ipPositionField = document.getElementById("ip_position");

    // Check if the selected IP ID exists in ipData
    if (ipData[ipId]) {
        ipNameField.value = ipData[ipId].name;
        ipCallsignField.value = ipData[ipId].callsign;
        ipPositionField.value = ipData[ipId].position;
    } else {
        // Clear fields if no match is found
        ipNameField.value = "";
        ipCallsignField.value = "";
        ipPositionField.value = "";
    }
}
