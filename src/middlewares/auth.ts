import jwt from "jsonwebtoken"

module.exports = async (request, response) => {
    try {
        const token = request.headers.authorization.split(' ')[1];
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        request.user = decodedToken;
    } catch (error) {
        response.status(401).send({ message: "Falha na autenticação"})
    }
}