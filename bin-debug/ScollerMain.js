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
var ScollerMain = (function (_super) {
    __extends(ScollerMain, _super);
    function ScollerMain() {
        return _super.call(this) || this;
    }
    ScollerMain.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ScollerMain.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.Test();
    };
    ScollerMain.prototype.Test = function () {
        //数据集
        var dsListFriends = [
            { name: "mike" },
            { name: "you" },
            { name: "nick" },
            { name: "bick" },
            { name: "xin" },
            { name: "shushu" },
            { name: "haokan" },
            { name: "wo" },
            { name: "ai" },
            { name: "shushu" },
            { name: "da" },
            { name: "bao" },
            { name: "bei" },
            { name: "naizi" },
            { name: "datui" },
            { name: "pigu" },
            { name: "julia" },
            { name: "ori" }
        ];
        var list = new eui.List();
        //列中接收数据集
        list.dataProvider = new eui.ArrayCollection(dsListFriends);
        list.itemRenderer = friend;
        this.addChild(list);
        this.listtest = list;
        //把列表加入滚动页
        this.scr_group.addChild(this.listtest);
        //把滚动页加入滚动框
        this.scollertest.viewport = this.scr_group;
        list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChange, this);
    };
    ScollerMain.prototype.onChange = function (e) {
        //获取点击消息
        console.log(this.listtest.selectedItem, this.listtest.selectedIndex);
    };
    return ScollerMain;
}(eui.Component));
__reflect(ScollerMain.prototype, "ScollerMain", ["eui.UIComponent", "egret.DisplayObject"]);
var friend = (function (_super) {
    __extends(friend, _super);
    function friend() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/friendPanel.exml";
        return _this;
        //this.dataCreate();
    }
    friend.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    return friend;
}(eui.ItemRenderer));
__reflect(friend.prototype, "friend");
//# sourceMappingURL=ScollerMain.js.map