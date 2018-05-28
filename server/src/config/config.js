module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME || 'StoreEZ',
		user: process.env.DB_USER || 'StoreEZ',
		password: process.env.DB_PASS || 'StoreEZ',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'localhost',
			storage: './storeez.sqlite'
		}
	}
};
