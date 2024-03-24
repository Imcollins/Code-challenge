// Function to calculate and output the grade based on the input mark
function studentGrade(studentMarks) {
    // Check if input is between 0 and 100
    if (studentMarks < 0 || studentMarks > 100) {
        return "Invalid input: student marks should be between 0 and 100";
    }

    // Determine the studentGrade based on the input marks
    let studentGrade;
    if (studentMarks > 79) {
        studentGrade = 'A';
    } else if (studentMarks >= 60) {
        studentGrade = 'B';
    } else if (studentMarks >= 50) {
        studentGrade = 'C';
    } else if (studentMarks >= 40) {
        studentGrade = 'D';
    } else {
        studentGrade = 'E';
    }

    return studentGrade;
}

// Prompt the user to input the student's marks
const inputString = prompt("Enter student's marks:");
const inputMarks = inputString ? parseInt(inputString) : null;

if (inputMarks === null || isNaN(inputMarks)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    // Call the function to get the student's grade and display the result
    console.log("Student's grade:", studentGrade(inputMarks));
}