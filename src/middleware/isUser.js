import { errorCustom } from "./errorHandler.js"

export function isUser(req, res, next) {
    if ((req.isAuthenticated() && req.user.rol == 'Usuario') || req.method == 'GET') {
        next()
    } else {
        throw new errorCustom('Forbidden', 403, 'Access denied!! (Route only for user)')
    }
}