function updateTraineeGrade() {
    const lessonType = document.getElementById("lesson_type").value;
    const program = document.getElementById("trainee_program").value;
    const traineeGradeDropdown = document.getElementById("trainee_grade");
    
    traineeGradeDropdown.innerHTML = "";

    if (lessonType === "Currency" || lessonType === "ZFT") {
        traineeGradeDropdown.innerHTML = '<option value="NG">NG</option>';
    } else if (lessonType === "Syllubus") {
        if (program === "MPL") {
            traineeGradeDropdown.innerHTML = `
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="NG">NG</option>
            `;
        } else if (program === "CPL" || program === "PPL" || program === "IDP") {
            traineeGradeDropdown.innerHTML = `
                <option value="UA">UA</option>
                <option value="BA">BA</option>
                <option value="A">A</option>
                <option value="AA">AA</option>
                <option value="NG">NG</option>
            `;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("lesson_type").addEventListener("change", updateTraineeGrade);
    document.getElementById("trainee_program").addEventListener("change", updateTraineeGrade);
});
