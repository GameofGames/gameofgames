const { pg, Pool } = require("pg");
// pg.defaults.poolSize = 100;

const PG_URI = "postgres://fzpyjmvq:aBWSpASBK-eKFJtTTM16MQGtnEiwrJ4e@lallah.db.elephantsql.com:5432/fzpyjmvq";

const pool = new Pool({
	connectionString: PG_URI,
});

module.exports = {
	query: (text, params, callback) => {
		console.log("executed query", text);
		return pool.query(text, params, callback);
	},
};
