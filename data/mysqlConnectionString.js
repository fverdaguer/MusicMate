

var mysqlConnectionString = {
    
    connection  :{
        
        dev : {
            host: 'vpar-fverdaguer',
            user: 'root',
            password : '47516326',
            database : 'wah'
        }

        ,
        
        qa : {
            host: 'yourhost',
            user: 'yourdatabaseusername',
            password : 'yourpasssword',
            database : 'yourdatabasename'
        }
        ,prod : {
            host: 'yourhost',
            user: 'yourdatabaseusername',
            password : 'yourpasssword',
            database : 'yourdatabasename'
        }
    
    }

};

module.exports.mysqlConnectionString = mysqlConnectionString;
