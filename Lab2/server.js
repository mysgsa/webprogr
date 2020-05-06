//Подключение http-модуля,
//который поставляется вместе с Node.js и
//реализация доступа к нему через переменную http
var http = require("http");
//Подключение модуля для работы с файловой системой
var fs = require("fs");
//Создание http-сервера, использующего порт 8888
http.createServer( function(request, response) {
    //загрузка html страницы из файловой системы
    var page = fs.readFileSync('hello.html');
    //запись в ответ заголовка с указанием кода состояния, и типа возвращаемого контента
    response.writeHead(200, { 'Content-Type': 'text/html' });
    //тело ответа
    response.write(page);
    //отправка ответа
    response.end();
}).listen(8888);