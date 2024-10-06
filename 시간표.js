document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input[type='text']");

    inputs.forEach((input, index) => {
        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                const nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }
        });
    });
});

function saveSchedule() {
    const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
    const schedule = {};

    days.forEach(day => {
        schedule[day] = [];
        for (let i = 1; i <= 7; i++) {
            let subject = document.getElementById(`${day}-${i}`);
            if (subject && !subject.disabled) {
                schedule[day].push(subject.value);
            }
        }
        let afterSchool = document.getElementById(`${day}-after`);
        if (afterSchool && !afterSchool.disabled) {
            schedule[day].push("방과 후: " + afterSchool.value);
        }
    });

    console.log("Saved Schedule:", schedule);
    alert("스케줄이 저장되었습니다!");
}
