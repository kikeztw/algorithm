const array = [1, 2, 3, 5, 6, 8, 10, 13, 25, 30];
const search_numner = 13;

const binarySearchAlgorithm = (sortArray: number[], searchNumner: number): number => {
  let low = 0;
  let high = sortArray.length - 1;

 
  while(low <= high){
    const midPoint = Math.floor((low + high) / 2);
    const middleIndexNumber = sortArray[midPoint];

    if(searchNumner === middleIndexNumber){
      return midPoint;
    }

    if(searchNumner > midPoint){
      low = midPoint + 1;
    }

    if(searchNumner < midPoint){
      high = midPoint - 1;
    }
  }
  
  return -1;
}

console.log('binary seearch', binarySearchAlgorithm(array, 3));