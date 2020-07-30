const findTeacher = require('../bd/Teachers/find');

function validateTeacher(request, response, next) {

    function validateDuplicates(err, duplicate) {
        try {
            if (err) throw new Error("Error validating the teacher")
            if (duplicate && duplicate.length >= 1) throw new Error("Duplicate teacher")
            next()
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    }
    findTeacher({ email: request.body.email }, validateDuplicates)
}

module.exports = validateTeacher;