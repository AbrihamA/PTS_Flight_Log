function updateEquipmentCallSign() {
    const resourceType = document.getElementById("resource_type").value;
    const equipmentType = document.getElementById("equipment").value;
    const equipmentCallSign = document.getElementById("equipment_callsign");

    // Clear previous options
    equipmentCallSign.innerHTML = "<option value=''>Select Call Sign</option>";

    // Populate dropdown if selections exist
    if (resourceType && equipmentType && eqData[resourceType] && eqData[resourceType][equipmentType]) {
        eqData[resourceType][equipmentType].forEach(sign => {
            const option = document.createElement("option");
            option.value = sign;
            option.textContent = sign;
            equipmentCallSign.appendChild(option);
        });
    }
}
