//assihnment no 18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Sawaat", "Makka", "Paris", "Istanmbol"];
//print my array in its original order
console.log("original " + places);
//print my array in alphabetical order without modifying the actual list.
console.log("copy " + __spreadArray([], places, true).sort());
//print my array is still in its actual order by printing it.
console.log("original " + places);
//print my array in reverse alphabetical order without changing the actual order.
console.log("copy " + __spreadArray([], places, true).sort().reverse());
//showing that my array is still in its original order by printing it again.
console.log("copy " + __spreadArray([], places, true).sort().reverse());
//reverse the order of my list . print the array to show that its order has change.
console.log("copy " + __spreadArray([], places, true).sort());
//reverse the order of my list . print the list to show its back to its original order.
console.log("copy " + __spreadArray([], places, true).sort().reverse());
//sort my array so it is store in alphabetical oreder. print the array to show that its order has been changed.
console.log("copy " + __spreadArray([], places, true).sort());
