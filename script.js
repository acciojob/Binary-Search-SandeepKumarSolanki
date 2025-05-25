function binarySearch(nums, target) {
// Your code here
// Return index if target is present
// else return -1
	let start = 0;
	let end = nums.length-1;
	while(start <= end){
		let mid = Math.floor((start+end)/2);
		if(target == nums[mid]){
			return mid;
		}
		if(target > nums[mid]){
			start = mid+1;
		}else{
			end = mid-1;
		}
	}
	return -1;
	// if(nums.includes(target)){
	// 	return nums.indexOf(target);
	// }else{
	// 	return -1;
	// }
}

module.exports = binarySearch;
