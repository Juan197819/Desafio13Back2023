import { errorCustom } from "./errorHandler.js"

export function isAdmin(req, res, next) {
    if ((req.isAuthenticated() && req.user.rol == 'Administrador') || req.method == 'GET') {
        next()
    } else {
        throw new errorCustom('Forbidden', 403, 'Access denied!! (Route only for administrators)')
    }
}
