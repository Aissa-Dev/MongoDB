const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/trainingDB')
    .then(() => console.log('Database connected...'))
    .catch(() => console.log('db could ot connected...'))

    const courseSchema = mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: { type: Date, default: Date.now},
        isPublished: Boolean
    });

    const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name: 'Java JS For Beginners',
        author: 'Ghazli',
        tags: ['java', 'spring-boot', 'backend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result)
}
createCourse();