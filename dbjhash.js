// usage: node dbjhash.js <string>

var dbj = function(str){
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        hash = ((hash << 5) + hash) + c;
    }
    return hash;
};

if (process.argv.length > 2)
    console.log(dbj(process.argv[2]));
