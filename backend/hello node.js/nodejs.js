var http = require('http'); //קריאה לספריית הווב
var url = require('url'); //קריאה לפונקציות שמטפלות בנתיבים
//אנחנו צריכים לייבא את המודול שלנו 
var myDate = require('./myDateTime')
var mySeason = require('./sesanos');
const webServerPort = 8080;

http.createServer(function (req,res){
    //הודעה איזה סוג דף אני הולך להעביר
    res.writeHead(200,{'Content-type':'text/html'});
    //עברית שפה קשה
    res.write('<head><meta charset=UTF-8></head>')
    //קבלת מידע מהבקשה
    //res.write(req.url);
    //שליחת מידע ללא סגירת התקשרות    
    res.write('<hr/>');
    res.write('<h1>Hello Class 48</h1>');
    res.write('<hr/>');
    res.write('<h2>Zeev Mindali</h2>');    
    res.write('<hr/>');
    res.write('all rights reseved to zeev mother in law 666 (c)(r)')
    res.write('<hr/>');
    //שימוש בפונקציה מתוך המודל שלנו
    res.write(myDate.myDateTime());
    res.write('<hr/>');
    //get queries (?season=summer)
    var query = url.parse(req.url,true).query;
    res.write(mySeason.sesanName(query.season));
    res.write('<hr/>');
    //get queries (holyday)
    res.write(mySeason.holiday(query.holiday));
    //סגירת תקשורת
    res.end();
}).listen(webServerPort);

console.log(`web server is up and running`);
console.log(`you can view the page http://localhost:${webServerPort}`);

