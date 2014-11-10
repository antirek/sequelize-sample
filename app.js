var Sequelize = require("sequelize");

var sequelize = new Sequelize('asterisk', 'root', '1234', {
	host: 'localhost', 
	port: 3306, 
	dialect: 'mysql',
    define: {
        timestamps: false,
    }
});


var Peer = sequelize.define('sippeers', {
  id: Sequelize.BIGINT,
  name: Sequelize.STRING
});


Peer.findAll().success(function(peers) {
	console.log(peers);
});