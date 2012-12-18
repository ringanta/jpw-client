function PositionManager(containerID, emptyElmt, numberOfColumn, numberOfRow){
	this.container = containerID;
	this.emptyID = emptyElmt;
	this.totalColumn = numberOfColumn;
	this.totalRow = numberOfRow;
	
	this.tryMove = function(elmt){
		var elmtID = elmt.id;
		var indexElmt = this.container.getIndex(elmtID);
		var indexEmpty = this.container.getIndex(this.emptyID);
		var realDirection = this.getDirection(indexElmt);
		if (realDirection > -1){
			this.container.swap(indexElmt, indexEmpty);
			return true;
		} else return false;
	}
	this.getDirection = function(index){
		var direction = [this.getUpper(), this.getRight(), this.getLower(), this.getLeft()];
		return direction.indexOf(index);
	}
	this.getLeft = function(){
		return this.isLeftAvailable() ? this.indexEmpty() - 1 : -1;
	}
	this.getRight = function(){
		return this.isRightAvailable() ? this.indexEmpty() + 1 : -1;
	}
	this.getUpper = function(){
		return this.isUpperAvailable() ? this.indexEmpty() - 4 : -1;
	}
	this.getLower = function(){
		return this.isLowerAvailable() ? this.indexEmpty() + 4 : -1;
	}
	this.isLeftAvailable = function(){
		var baseCol = this.getBaseColumn();
		return baseCol > 0;
	}
	this.isRightAvailable = function(){
		var baseCol = this.getBaseColumn();
		return baseCol < (this.totalColumn - 1);
	}
	this.isUpperAvailable = function(){
		var baseRow = this.getBaseRow();
		return baseRow > 0;
	}
	this.isLowerAvailable = function(){
		var baseRow = this.getBaseRow();
		return baseRow < (this.totalRow -1);
	}
	this.getBaseColumn = function(){
		return this.indexEmpty() % this.totalColumn;
	}
	this.getBaseRow = function(){
		return Math.floor(this.indexEmpty() / this.totalColumn);
	}
	this.indexEmpty = function(){
		return this.container.getIndex(this.emptyID);
	}
	this.move = function(elmt){
		var id = elmt.id;
		$("#" + id).animate({top: top, left: left}, 600);
	}
}