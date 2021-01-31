var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TextInput = (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        return _super.call(this) || this;
    }
    TextInput.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    TextInput.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.Test();
        this.Touch();
    };
    //输入框实现
    TextInput.prototype.Test = function () {
        this.UserName.text = "";
        this.addChild(this.UserName);
        this.UserName.wordWrap = true;
        this.UserName.addEventListener(egret.Event.CHANGE, this.Change_name, this);
        this.password.text = "";
        this.addChild(this.password);
        this.password.displayAsPassword = true;
        this.password.wordWrap = false;
        this.password.addEventListener(egret.Event.CHANGE, this.Change_pwd, this);
    };
    //获取输入的账号
    TextInput.prototype.Change_name = function (e) {
        // var username:string="x739809514";
        // console.log(e.target.text);
        // if(e.target.text==username){
        // 	return true;
        // }else{
        // 	return false;
        // }
        this.user_name = e.target.text;
    };
    //获取输入的密码
    TextInput.prototype.Change_pwd = function (e) {
        // var pwd:string="zaqw2a701";
        // //console.log(e.target.text);
        // if(e.target.text==pwd){
        // 	return true;
        // }else{
        // 	return false;
        // }
        this.user_pwd = e.target.text;
    };
    //判断账号密码是否正确
    TextInput.prototype.IsRight = function () {
        var username = "x739809514";
        var pwd = "zaqw2a701";
        if (this.user_name == username && this.user_pwd == pwd) {
            alert("That's okay");
        }
    };
    //确认按钮
    TextInput.prototype.Touch = function () {
        var _this = this;
        this.btn_ok.touchEnabled = true;
        this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.IsRight();
        }, this);
    };
    return TextInput;
}(eui.Component));
__reflect(TextInput.prototype, "TextInput", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=TextInput.js.map