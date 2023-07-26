import boom from "@hapi/boom";

function validatorHandler(schema, propertie) {
    return (req, res, next) => {
        const data = req[propertie];
        const { error } = schema.validate(data, {abortEarly: false});
        if(error) {
            next(boom.badRequest(error));
        }
        next();
    }
}

export { validatorHandler }