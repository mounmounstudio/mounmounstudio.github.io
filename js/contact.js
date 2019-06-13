$(document).ready(function () {
    init();

    //宣告預設表單內容為空 （你想要的話也可以加東西）
    var initSubject = '',
        initBody = '';

    //按下傳送按鈕後執行
    $("#submit").click(function () {
        console.log("clicked");
        let to = "nikitasinru@gmail.com"; //寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
        let nameElement = document.getElementById("name");
        let name = nameElement.value; //讀取ID為 nameTextuser 物件中的值
        let emailElement = document.getElementById("email");
        let email = emailElement.value;
        let telElement = document.getElementById("tel");
        let tel = telElement.value;
        let subTitileElement = document.getElementById("subTitile");
        let subject = subTitileElement.value;
        let messageElement = document.getElementById("message");
        let message = messageElement.value;

        //把user填的資料都塞到 mail body 中
        let body = "" + message + '%0A%0A%0A'; //%0A是換行 換了三行
        body += "From：" + name + '%0A';
        body += "Email：" + email + '%0A';
        body += "Tel：" + tel;
        //傳送的主要程式碼
        // mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
        window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    });

    //在body onload
    function init() {
        subText.value = initSubject;
        toText.value = initTo;
        bodyText.value = initBody;
    }

});