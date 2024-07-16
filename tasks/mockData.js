const { faker } = require('@faker-js/faker');
const Course = require('../src/models/Course');
const Student = require('../src/models/Student');

// Delete all courses
console.log("Deleting all courses...");
Course.destroy({ truncate: true }).then(() => {
    for (var i = 0; i < 20; i++) {
        const courseName = `BS ${faker.company.name()}`;
    
        Course.create({
            name: courseName
        }).then(() => {
            console.log(`Creating course ${courseName}`)
        })
    }
});

const loadStudents = async () => {
    console.log("Destroying all students...");
    await Student.destroy({ truncate: true });

    const course = (await Course.findAll())[0];

    for (var i = 0; i < 5; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        console.log(`Creating student ${firstName} ${lastName}...`);

        await Student.create({
            firstName: firstName,
            lastName: lastName,
            courseId: course.id
        })
    }
}

loadStudents().then(() => {
    console.log("Done loading students...");
})