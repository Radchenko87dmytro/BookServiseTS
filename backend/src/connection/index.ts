const mongoose = require('mongoose');

module.exports.connect = async () => {
    const DATABASE_HOST = process.env.DATABASE_HOST;

    const tryConnect = async () => {
        console.log(
            DATABASE_HOST === 'local'
                ? `mongodb://localhost:27017/DATA`
                : `mongodb://mongo-database:27017/DATA`
        );
        try {
            await mongoose.connect(
                DATABASE_HOST === 'local'
                    ? `mongodb://localhost:27017/DATA`
                    : `mongodb://mongo-database:27017/DATA`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }
            );
        } catch (err) {
            console.log(`Could not connect to mongodb: ${err}`);
            if (err) {
                console.error(
                    'Failed to connect to mongo on startup - retrying in 5 sec',
                    err
                );
                setTimeout(tryConnect, 5000);
            }
        }
    };
    tryConnect();
};

module.exports.get = () => mongoose;

module.exports.close = () => mongoose.close();
