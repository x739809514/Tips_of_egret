class TextInput extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.Test();
		this.Touch();
	}

	private UserName:eui.EditableText;
	private password:eui.EditableText;
	private btn_ok:eui.Button;
	private user_name:string;
	private user_pwd:string;

	//输入框实现
	private Test(){
		this.UserName.text="";
		this.addChild(this.UserName);
		this.UserName.wordWrap=true;
		this.UserName.addEventListener(egret.Event.CHANGE,this.Change_name,this);

		this.password.text="";
		this.addChild(this.password);
		this.password.displayAsPassword=true;
		this.password.wordWrap=false;
		this.password.addEventListener(egret.Event.CHANGE,this.Change_pwd,this);
	}

	//获取输入的账号
	private Change_name(e:egret.Event){
		// var username:string="x739809514";
		// console.log(e.target.text);
		// if(e.target.text==username){
		// 	return true;
		// }else{
		// 	return false;
		// }
		this.user_name=e.target.text;
	}
	
	//获取输入的密码
	private Change_pwd(e:egret.Event){
		// var pwd:string="zaqw2a701";
		// //console.log(e.target.text);
		// if(e.target.text==pwd){
		// 	return true;
		// }else{
		// 	return false;
		// }
		this.user_pwd=e.target.text;

	}

	//判断账号密码是否正确
	private IsRight(){
		var username:string="x739809514";
		var pwd:string="zaqw2a701";
		if(this.user_name==username&&this.user_pwd==pwd){
			alert("That's okay");
		}
	}

	//确认按钮
	private Touch(){
		this.btn_ok.touchEnabled=true;
		this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP,(e:egret.TouchEvent)=>{
			this.IsRight();
		},this);
	}
}