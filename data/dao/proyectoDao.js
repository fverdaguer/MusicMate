


var connectionProvider = require('../mysqlConnectionStringProvider.js');

var proyectoDao = {
    
    createProyecto : function (proyecto, OnSuccessfulCallback) {
        
        var insertStatement = "INSERT INTO proyecto SET?";
        
        var item = {
            
            
            Titulo : proyecto.titulo,
            SoundcloudUrl: proyecto.soundcloudUrl,
            YoutubeUrl : proyecto.youtubeUrl,
            FacebookUrl : proyecto.facebookUrl,
            Fecha : new Date()
        };
        
        console.log(category);
        
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        
        if (connection) {
            
            connection.query(insertStatement, item, function (err, result) {
                
                if (err) { }
                
                OnSuccessfulCallback({ status : 'successful' });
                console.log(result)
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }

    ,

    getAllProyecto : function (callback) {
    
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "SELECT * FROM proyecto ORDER BY ID DESC";
        
        if (connection) {
            
            connection.query(queryStatement, function (err, rows, fields) {
                
                if (err) { throw err; }
                
                
                console.log(rows);

                callback(rows);
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }

    ,

    getProyectoById : function (proyectoId, callback) {
        
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "SELECT * FROM proyecto WHERE id = ?";
        
        if (connection) {
            
            connection.query(queryStatement, [proyectoId] ,  function (err, rows, fields) {
                
                if (err) { throw err; }
                
                
                console.log(rows);
                
                callback(rows);
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }


    ,

    updateProyecto: function (proyecto, callback) {
    
    
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "UPDATE  proyecto SET Titulo= ? ,  YoutubeUrl = ?, FacebookUrl = ?  WHERE Id = ?";
        
        if (connection) {
            
            connection.query(queryStatement, [ proyecto.titulo, proyecto.youtubeUrl,  new Date()] , function (err, rows, fields) {
                if (err) { throw err; }
                console.log(rows);
                
                if (rows) { 

                
                    callback({ status : 'successful' });
                }
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }
    ,

    deleteProyectoById : function (proyectoId, callback) {
    
    
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "DELETE  FROM  proyecto   WHERE id = ?";
        
        if (connection) {
            
            connection.query(queryStatement, [proyectoId] , function (err, rows, fields) {
                if (err) { throw err; }
                console.log(rows);
                
                if (rows) {
                    
                    callback({ status : 'successful' });
                }
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }

}

module.exports.proyectoDao = proyectoDao;
                
    
