/*
DESCRIPTION:
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
*/
class PaginationHelper {
	constructor(collection, itemsPerPage) {
    	this.collection = collection;
        this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
        return this.collection.length
	}
	pageCount() {
    	return Math.ceil(this.collection.length / this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
    	let itemsOnPage = []
        let collect = this.collection.length;
        while (collect >= 0 ) {
            if (collect >= this.itemsPerPage) {
                itemsOnPage.push(this.itemsPerPage)
            } else {
				if (collect !== 0) itemsOnPage.push(collect)
            }
            collect -= this.itemsPerPage
        }
        let checkedIndex = itemsOnPage.findIndex((el,index)=>index === pageIndex)
		if (checkedIndex >= 0) {
			return itemsOnPage[pageIndex]
		} else {
			return checkedIndex
		}
	}
	pageIndex(itemIndex) {
		let pageCollect = [];
		for (let index = 0; index < this.collection.length; index++) {
			let a = Math.floor((index) / this.itemsPerPage)
			pageCollect.push(a)
		}
		if (itemIndex >= this.collection.length || itemIndex < 0) {
			return -1
		}
		return pageCollect[itemIndex]
	}
}