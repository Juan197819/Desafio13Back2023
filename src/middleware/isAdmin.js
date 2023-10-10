import { errorCustom } from "./errorHandler.js"

export function isAdmin(req, res, next) {
    if (req.method == 'GET') {
        next()
    } else {
        if (req.user.rol == 'Administrador') {
            next()
        } else {
            throw new errorCustom('Forbidden', 403, 'Access denied!! (Route only for administrators)')
        }
    }
}