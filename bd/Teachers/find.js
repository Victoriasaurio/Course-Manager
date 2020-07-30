const ModelTeacher = require('../../models/teacher');

function findTeacher(Filters, validateDuplicates) {
    ModelTeacher.find(Filters, validateDuplicates)
}

module.exports = findTeacher;