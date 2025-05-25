function binarySearch(nums, target) {
// Your code here
// Return index if target is present
// else return -1
	if(nums.includes(target)){
		return nums.indexOf(target);
	}else{
		return -1;
	}
}

module.exports = binarySearch;
