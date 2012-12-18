/**
 * Use div element and turn it into a show room for other element
 * Every object inside show room must have unique id
 * This class depend on ContainerID.js
 */
function getElmt(id){
	return document.getElementById(id);
}
function ShowRoom(elementId){
	this.area = getElmt(elementId);
	this.tabId = new ContainerID();
	this.empty;
	
	this.getContainerID = function(){
		return this.tabId;
	}
	this.getEmptyElement = function(){
		return this.empty;
	}
	this.putElement = function(elmtId){
		var elmt = getElmt(elmtId);
		this.area.appendChild(elmt);
	}
	this.setEmptyElement = function(elmtId){
		this.empty = elmtId;
	}
	this.putAllElement = function(elementIds){
		var total = elementIds.length;
		var i = 0;
		
		for (; i<total; i++){
			this.tabId.addId(elementIds[i]);
			this.putElement(elementIds[i]);
		}
	}
	this.removeElement = function(elmtId){
		var elmt = getElmt(elmtId);
		this.area.removeChild(elmt);
	}
	this.clear = function(){
		var i = 0;
		for (; i< this.tabId.size; i++){
			this.removeElement(this.tabId.getId(i));
		}
		this.tabId.clear();
	}
}