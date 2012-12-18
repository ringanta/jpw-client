function ContainerID(){
	this.tabId = new Array();
	this.curIndex = 0;
	this.size = 0;
	
	this.addId = function (newId){
		this.tabId[this.curIndex] = newId;
		this.curIndex++;
		this.size++;
	}
	this.removeId = function(oldId){
		var index = this.getIndex(oldId);
		if (index >= 0){
			this.shrink(index);
		}
	}
	this.shrink = function(index){
		var i = index;
		this.size--;
		this.curIndex--;
		for (;i<this.size; i++){
			this.tabId[i] = this.tabId[i+1];
		}
	}
	this.getIndex = function(oldId){
		return this.tabId.indexOf(oldId);
	}
	this.getId = function(index){
		var id = index >= 0 && index < this.size ? this.tabId[index] : 'null';
		return id;
	}
	this.clear = function(){
		this.tabId = new Array();
		this.curIndex = 0;
		this.size = 0;
	}
	this.swap = function(indexAw, indexAk){
		var temp = this.getId(indexAw);
		this.tabId[indexAw] = this.getId(indexAk);
		this.tabId[indexAk] = temp;
	}
}