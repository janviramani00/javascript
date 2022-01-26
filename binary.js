let arr = [1, 2, 67, 43, 56, 23, 45, 89, 70, 85, 5];


function binary(arr, value) {
        let high = arr.length - 1;
        let low = 0;
        let mid = 0;

        while (low <= high) {
                mid = Math.floor((high + low) / 2)
                {
                        if (arr[mid] == value) {
                                return arr[mid];
                        }
                        else if (value > arr[mid]) {
                                low = mid + 1;
                        }
                        else {
                                high = mid - 1;
                        }
                }
        }
        
}

 let sorted = arr.sort(function (a, b) { return a - b });
 console.log(sorted);

let value = 5;
if (binary(arr, value)) {
        console.log("element found");
} else {
        console.log("element not found");
}

value = 50;

if (binary(arr, value)) {
        console.log("element found");
} else {
        console.log("element not found");
}







