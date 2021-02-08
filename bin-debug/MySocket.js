var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MySockect = (function () {
    function MySockect() {
    }
    Object.defineProperty(MySockect, "Instance", {
        get: function () {
            if (MySockect._manager == null) {
                MySockect._manager = new MySockect();
            }
            return MySockect._manager;
        },
        enumerable: true,
        configurable: true
    });
    //连接服务器----------------------------------------------
    MySockect.prototype.connectionSockect = function () {
        //创建 WebSocket 对象
        this.socket = new egret.WebSocket();
        //连接服务器
        //设置数据格式为二进制，默认为字符串
        this.socket.type = egret.WebSocket.TYPE_STRING;
        //添加收到数据侦听，收到数据会调用此方法
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        //添加链接打开侦听，连接成功会调用此方法
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        //添加异常侦听，出现异常会调用此方法
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        this.socket.connect("127.0.0.1", 8080);
    };
    //手动关闭连接------------------------------------------------------
    MySockect.prototype.closeSockect = function () {
        this.socket.close();
    };
    //检测sockect是否已经连接-----------------------------------------
    MySockect.prototype.isConnection = function () {
        return this.socket.connected;
    };
    //发送数据----------------------------------------------
    MySockect.prototype.sendData = function (data) {
        var sendData = JSON.stringify(data); //
        console.log("正在发送数据............");
        this.socket.writeUTF(sendData);
        console.log("发送数据完成");
    };
    //Sockect连接成功----------------------------------------------
    MySockect.prototype.onSocketOpen = function () {
        var data_test = { "path": "test1", "data": { "msg": "test1" } };
        console.log("Sockect连接成功");
        this.sendData(data_test);
    };
    //Sockect连接失败----------------------------------------------
    MySockect.prototype.onSocketClose = function () {
        console.log("Sockect连接失败");
    };
    //Sockect连接关闭----------------------------------------------
    MySockect.prototype.onSocketError = function () {
        console.log("Sockect连接关闭");
    };
    //收到数据----------------------------------------------
    MySockect.prototype.onReceiveMessage = function () {
        //读取数据
        var msg = this.socket.readUTF();
        var data = JSON.parse(msg);
        // 在此对收到的数据进行处理.....
        console.log(data[0]['name']);
    };
    return MySockect;
}());
__reflect(MySockect.prototype, "MySockect");
//# sourceMappingURL=MySocket.js.map