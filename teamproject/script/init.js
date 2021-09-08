var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    static = require('serve-static'),
    errorHandler = require('errorhandler'),
    expressErrorHandler = require('express-error-handler'),
    expressSession = require('express-session');
 
var mysql = require('mysql');
 
var pool = mysql.createPool({
   connectionLimit: 10,
    host: 'localhost',
    user: 'hyun',
    password: '123412341234',
    database: 'space',
    debug: false
});
 
var app = express();
 
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));
 
var router = express.Router();
 
//사용자 등록 라우터
router.route('/process/adduser').post(function(req, res){
    console.log('/process/adduser 호출됨');
    
    var paramId = req.body.id || req.query.id;
    var paramPw = req.body.password || req.query.password;
    var paramName = req.body.name || req.query.name;
    var paramAge = req.body.age || req.query.age;
    
    console.log('요청 파라미터: ' + paramId + ', ' + paramPw + ', ' + paramName + ', ' + paramAge);
    
    if(pool){
        addUser(paramId, paramName, paramAge, paramPw,
               function(err, addedUser){
            if(err){
                console.error('사용자 추가 중 오류: '+err.stack);
                res.writeHead(200, {
                    "Content-Type": "text/html;charset=utf8"
                });
                res.write('<h1>에러발생</h1>');
                res.end();
                return;
            }
            
            if(addedUser){
                console.dir(addedUser);
                console.log('inserted ' + addedUser.affectedRows + ' rows');
                
                var insertId = addedUser.insertId;
                console.log('추가한 레코드 ID: ' + insertId);
                
                res.writeHead(200, {
                    "Content-Type": "text/html;charset=utf8"
                });
                res.write('<h1>사용자 추가 성공</h1>');
                res.write("<br><a href='/public/login.html'>로그인</a>");
                res.end();
                return;
            } else{
                res.writeHead(200, {
                    "Content-Type": "text/html;charset=utf8"
                });
                res.write('<h1>사용자 추가 중 오류</h1>');
                res.write("<br><a href='/public/adduser.html'>되돌아가기</a>");
                res.end();
            }
        });
    } else{
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf8"
        });
        res.write('<h1>DB 연결 실패</h1>');
        res.end();
    }
});
 
//사용자 조회(로그인) 라우터
router.route('/process/login').post(function (req, res) {
    console.log('/process/login 호출됨');
 
    var paramId = req.body.id || req.query.id;
    var paramPw = req.body.password || req.query.password;
    
    console.log('요청 파라미터: ' + paramId + ', ' + paramPw);
    
    if(pool){
        authUser(paramId, paramPw, function(err, rows){
            if(err){
                console.error('사용자 로그인 오류: '+err.stack);
                res.writeHead(200, {
                    "Content-Type": "text/html;charset=utf8"
                });
                res.write('<h1>로그인 중 오류 발생함</h1><hr>'+err.stack);
                res.end();
                return;
            }
            
            if(rows){
                console.dir(rows);
                
                var username = rows[0].name;
                
                res.writeHead(200, {
                    "Content-Type": "text/html;charset=utf8"
                });
                res.write('<h1>로그인 성공!</h1><hr>');
                res.write('<div><p>ID: ' + paramId + '</p></div>');
                res.write('<div><p>이름: ' + username + '</p></div>');
                res.write("<br><a href='/public/login.html'>다시 로그인</a>");
                res.end();
                return;
            } else{
                res.writeHead(200, {
                    "Content-Type": "text/html;charset=utf8"
                });
                res.write('<h1>해당 사용자 없음!</h1><hr>');
                res.write("<br><a href='/public/login.html'>다시 로그인</a>");
                res.end();
            }
        });
    } else {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf8"
        });
        res.write('<h1>DB 연결 실패</h1>');
        res.end();
    }
});
 
app.use('/', router);
 
//사용자 등록 함수
var addUser = function(id, name, age, password, callback){
    console.log('addUser 호출됨');
    
    pool.getConnection(function(err, conn){
        if(err){
            if(conn){
                conn.release();
            }
            callback(err, null);
            return;
        }
        
        console.log('DB 연결 스레드 아이디: ' + conn.threadId);
        
        var data = {id:id, name:name, age:age, password:password};
        
        var exec = conn.query('insert into users set ?', data, function(err, result){
            conn.release();
            console.log('실행 대상 SQL: ' + exec.sql);
            
            if(err){
                console.log('SQL 실행 오류 발생');
                console.dir(err);
                callback(err, null);
                return;
            }
            
            callback(null, result);
        });
    });
}
 
//사용자 조회(로그인) 함수
var authUser = function (id, password, callback) {
    console.log('authUser 호출됨');
 
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) {
                conn.release();
            }
            callback(err, null);
            return;
        }
 
        console.log('DB 연결 스레드 아이디: ' + conn.threadId);
 
        var col = ['id', 'name', 'age']; //SELECT ?
        var tablename = 'users';
 
        var exec = conn.query('select ?? from ?? where id = ? and password = ?', [col, tablename, id, password], function (err, rows) {
            conn.release();
            console.log('실행 대상 SQL: ' + exec.sql);
 
            if (err) throw err;
            if (rows.length > 0) {
                console.log('아이디 [%s], 패스워드 [%s] 사용자 찾음', id, password);
                callback(null, rows);
            } else {
                console.log('일치 사용자 못 찾음');
                callback(null, null);
            }
        });
    });
}
 
 
// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});
 
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);
 
//웹서버 생성
var appServer = http.createServer(app);
appServer.listen(app.get('port'),
    function () {
        console.log('express server started with port ' + app.get('port'));
    }
);
 