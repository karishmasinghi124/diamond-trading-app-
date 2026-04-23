exports.testApi = (req, res) => {
    res.json({
        message: "API is working",
        environment: process.env.NODE_ENV || "development"
    });
};
