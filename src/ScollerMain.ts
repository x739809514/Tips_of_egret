class ScollerMain extends eui.Component implements  eui.UIComponent {
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
	}
	//滚动框
	private scollertest:eui.Scroller;
	//滚动页
	private scr_group:eui.Group;
	//页中的列表
	private listtest:eui.List;

	public Test(){
		//数据集
		var dsListFriends: Array<Object> = [
            {name:"mike"},
			{name:"you"},
			{name:"nick"},
			{name:"bick"},
			{name:"xin"},
			{name:"shushu"},
			{name:"haokan"},
			{name:"wo"},
			{name:"ai"},
			{name:"shushu"},
			{name:"da"},
			{name:"bao"},
			{name:"bei"},
			{name:"naizi"},
			{name:"datui"},
			{name:"pigu"},
			{name:"julia"},
			{name:"ori"}
        ];

		var list=new eui.List();
		//列中接收数据集
		list.dataProvider=new eui.ArrayCollection(dsListFriends);

		list.itemRenderer=friend;
		this.addChild(list);
		this.listtest=list;
		//把列表加入滚动页
		this.scr_group.addChild(this.listtest);
		//把滚动页加入滚动框
		this.scollertest.viewport=this.scr_group;
		list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onChange,this);		
		}

		 private onChange(e:eui.PropertyEvent):void{
        //获取点击消息
        console.log(this.listtest.selectedItem,this.listtest.selectedIndex)
    }
		
}

class friend extends eui.ItemRenderer{
	public gf:eui.Label;
	constructor(){
		super();
		this.skinName="resource/eui_skins/friendPanel.exml";
		//this.dataCreate();
	}

	protected createChildren(): void {
        super.createChildren();
    }

	// protected dataCreate(){
	// 	this.gf.text=this.data.name;
	// }
	
	 
}