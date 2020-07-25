const createTeacherInDB = require('../bd/Teachers/create');

function createTeacher(req, res) {
    try {
        const params = req.body
        let status = 0,
            message = {}
            // params.password = encriptar(params.password, 10)
            //if(!encriptar.length > 20) throw new Error("Error al encriptar la contraseña")
        function validate(err, teacherRegistered) {
            status = err ? 500 : 200
            message = err ? { message: "Can't create a teacher" } : { teacher: teacherRegistered }
            res.status(status).send(message);
        }
        createTeacherInDB(params, validate)
    } catch (err) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = createTeacher;