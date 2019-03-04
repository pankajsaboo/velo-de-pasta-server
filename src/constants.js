const PORT = process.env.PORT || 3000; // port to start server on
const MONGO_PORT = process.env.DB_PORT || 27017; // mongo port
const DB_NAME = process.env.DB_NAME || 'RACE_APP'; // sample db name
const SECRET = process.env.SECRET || "RMMSECRET";
const DB_URL = process.env.DB_URL || 'localhost';
const DB_USERNAME = process.env.DB_USERNAME || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';

export {
	PORT,
	MONGO_PORT,
	DB_NAME,
	SECRET,
	DB_URL,
	DB_USERNAME,
	DB_PASSWORD,

}
