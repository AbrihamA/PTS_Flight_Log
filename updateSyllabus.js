function updateSyllabusDropdown() {
    setTimeout(() => {
        const program = document.getElementById("trainee_program").value;
        const resourceType = document.getElementById("resource_type").value;
        const lessonType = document.getElementById("lesson_type").value;
        const syllabusDropdown = document.getElementById("syllubus_no");

        console.log("updateSyllabusDropdown triggered");

        // Clear previous options
        syllabusDropdown.innerHTML = "<option value=''>Select Syllabus No.</option>";

        if (!program || !resourceType || !lessonType) {
            console.warn("Program, Resource Type, or Lesson Type is missing.");
            return;
        }

        console.log("Captured Values:", { program, resourceType, lessonType });

        if (lessonType === "Syllubus") {
            const filteredSyllabus = syllabusData.filter(s => 
                s.Program.trim().toLowerCase() === program.trim().toLowerCase() &&
                s.Equipment.trim().toLowerCase() === resourceType.trim().toLowerCase()
            );

            console.log("Filtered Syllabus Data:", filteredSyllabus);

            if (filteredSyllabus.length > 0) {
                filteredSyllabus.forEach(s => {
                    const option = document.createElement("option");
                    option.value = s.Syllabus;
                    option.textContent = s.Syllabus;
                    syllabusDropdown.appendChild(option);
                });
            } else {
                console.warn("No matching syllabus found.");
            }
        } else if (lessonType === "ZFT") {
            syllabusDropdown.innerHTML = '<option value="Z">Z</option>';
        } else if (lessonType === "Currency") {
            syllabusDropdown.innerHTML = '<option value="C">C</option>';
        }
    }, 100); // Small delay to ensure values update
}
