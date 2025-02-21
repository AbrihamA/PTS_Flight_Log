function updateBatches() {
    let program = document.getElementById("trainee_program").value;
    let batchDropdown = document.getElementById("trainee_batch");
    batchDropdown.innerHTML = '<option value="">Select Batch</option>';
    
    if (program && traineeData[program]) {
        for (let batch in traineeData[program]) {
            batchDropdown.innerHTML += `<option value="${batch}">${batch}</option>`;
        }
    }
}

function updateCallSigns() {
    let program = document.getElementById("trainee_program").value;
    let batch = document.getElementById("trainee_batch").value;
    let callSignDropdown = document.getElementById("trainee_callsign");
    callSignDropdown.innerHTML = '<option value="">Select Call Sign</option>';
    
    if (program && batch && traineeData[program][batch]) {
        for (let callSign in traineeData[program][batch]) {
            callSignDropdown.innerHTML += `<option value="${callSign}">${callSign}</option>`;
        }
    }
}

function updateTraineeDetails() {
    let program = document.getElementById("trainee_program").value;
    let batch = document.getElementById("trainee_batch").value;
    let callSign = document.getElementById("trainee_callsign").value;
    let traineeIDField = document.getElementById("trainee_id");
    let traineeNameField = document.getElementById("trainee_name");
    
    if (program && batch && callSign && traineeData[program][batch][callSign]) {
        let trainee = traineeData[program][batch][callSign];
        traineeIDField.value = trainee.ID;
        traineeNameField.value = trainee.Name;
    } else {
        traineeIDField.value = "";
        traineeNameField.value = "";
    }
}
