import jwt from "jsonwebtoken"

module.exports = (request, response, next) => {
    try {
        const token = request.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        request.user = decodedToken;
        next();
    } catch (error) {
        response.status(401).send({ message: "Authetication error."})
    }
}