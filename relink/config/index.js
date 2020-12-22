require("dotenv").config({path: __dirname + '/../.env'});

module.exports = {
    mappings: [
        {
            "dependencyPath": process.env.SEQUELIZE_MODEL_PATH,
            "targetPath": process.env.APPLICATION_API_PATH
        },
        {
            "dependencyPath": process.env.SEQUELIZE_MODEL_PATH,
            "targetPath": process.env.BACKEND_WORKER_PATH
        },
        {
            "dependencyPath": process.env.SEQUELIZE_MODEL_PATH,
            "targetPath": process.env.BODY_SYNC_WORKER_PATH
        },
        {
            "dependencyPath": process.env.SEQUELIZE_MODEL_PATH,
            "targetPath": process.env.ORDER_HANDLER_PATH
        },
        {
            "dependencyPath": process.env.SEQUELIZE_MODEL_PATH,
            "targetPath": process.env.OUTREACH_SENDER_PATH
        },
        {
            "dependencyPath": process.env.SEQUELIZE_MODEL_PATH,
            "targetPath": process.env.STATE_MACHINES_PATH
        }
    ]
}
