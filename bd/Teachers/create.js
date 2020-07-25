const ModelTeacher = require('../../models/teacher');

function createTeacherInDB(params, validate) {
    const Teacher = new ModelTeacher(params);
    Teacher.save(validate)
}

module.exports = createTeacherInDB