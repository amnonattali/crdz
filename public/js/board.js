//Board for game of life 

/**
 * Board class. A board consists of alive and dead cells,
 * represented by 0 for dead cells and 1 for alive cells
 * 
 * @param integer size > 0
 */

 var Board = function(size) {
 	//constructor idiom
 	var that = Object.create(Board.prototype)
 	
 	var cells = [];
	times(size, function() {
	    var col = [];
	    cells.push(col);
	    times(size, function() {
	        col.push(0);
	    });
	});

 	var subscribers = [];

 	/**
 	 * Subscribe to changes to this object
 	 * @param subscriber a function that is called whenever the board is changed
 	 */
 	that.subscribe = function(subscriber) {
 		subscribers.push(subscriber);
 	};
 	var publishChanges = function() {
 		subscribers.forEach(function(s) {
 	 		s();
 	 	});
 	};

 	/**
 	 * Get size of board
 	 * @return integer board size
 	 */
 	that.getSize = function() {
 		return size;
 	}

 	/** 
 	 * Get cell
 	 * @param integer row index of cell
 	 * @param integer cell index of cell
 	 * @return integer state of cell, 0 for dead, 1 for alive cells
 	 * returns 0 for out-of-boundary cells
 	 */
 	that.getCell = function(row, col) {
 	 	if (row >= 0 && row < size && col >= 0 && col < size) {
 	 		return cells[row][col];
 	 	}
 	 	return 0;
 	}

 	/**
 	 * Set cell at row, col to value
 	 * @param integer row index of cell to be set
 	 * @param integer col index of cell to be set
 	 * @param state of cell, 0 for dead and 1 for alive
 	 * if row or col is out-of-boundary, or value is not valid,
 	 * we do not do anything
     */
 	that.setCell = function(row, col, value) {
 	 	if (row >= 0 && row < size && col >= 0 && col < size) {
 	 		if (value === 0 || value === 1) {
 	 			cells[row][col] = value;
 	 			publishChanges();
 	 		}
 	 	}
 	};

 	/**
 	 * Toggle cell state
 	 * @param integer row index of cell
 	 * @param integer col index of cell
 	 * if row or col is out of bounds, we don't do anything
 	 */
 	that.toggleCell = function(row, col) {
 		cellValue = that.getCell(row, col);
 	  	if (cellValue === 0 || cellValue === 1) {
 	  		that.setCell(row, col, 1-cellValue);
 	  	}
 	};

 	/**
 	 * Get board
 	 * @return 2D array of board
 	 */
 	that.getBoard = function() {
 	 	boardCopy = [];
 	 	cells.forEach(function(row) {
 	 		boardCopy.push(row.slice());
 	 	});
 	 	return boardCopy;
 	}

	/**
	 * Set board
	 * If board is invalid, doesn't do anything
	 * @param 2D array board to set cells to
	 */
	that.setBoard = function(board) {
		areRowsInvalid = board.some(function(row) {
	  		return row.length != size;
	  	});
	  	if (board.length == size && !areRowsInvalid) {
	  		cells = board;
	  		publishChanges();
	  	}
	}

	/**
	 * Get number of neighbors for a cell at row, col
	 * Counts out-of-bounds cells as dead cells
	 * @param integer row index of cell
	 * @param integer column index of cell
	 * @return number of neighbors, 0 if the row, col is out of bounds
	 */
	that.getNeighborCount = function(row, col) {
		var count = -that.getCell(row, col);
	    if (row >= 0 && row < size && col >= 0 && col < size) {
 	 		var neighbors = [1, 0, -1];
 	 		neighbors.forEach(function(row_diff) {
 	 			neighbors.forEach(function(col_diff) {
 	 				count += that.getCell(row-row_diff, col-col_diff);
 	 			});
 	 		});
 	 	}
 	 	return count;
 	}

 	Object.freeze(that);
 	return that;
}
