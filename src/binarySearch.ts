const Myname: string = 'srijon paul';

const arr: number[] = [21, 34, 35, 45, 56, 65];

function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

function recursiveBinarySearch(
  arr: number[],
  target: number,
  low: number,
  high: number
): number {
  if (low <= high) {
    const mid = Math.round((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      return recursiveBinarySearch(arr, target, low, mid - 1);
    } else return recursiveBinarySearch(arr, target, mid + 1, high);
  }

  return -1;
}

console.log(binarySearch(arr, 45));
console.log(recursiveBinarySearch(arr, 45, 0, arr.length - 1));
