function isEmpty(arr) {
  let elements = true;
  if (isArray(arr)) {
    if (arr.length != 0) {
      elements = false;
    }
  }
  return elements;
}

function isArray(array) {
  if (Array.isArray(array) === true) return true;
  else return false;
}

function isAllElementsNumber(arr) {
  let elements = false;
  if (isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i])) {
        elements = true;
      }
    }
  }
  return elements;
}

function sortArray(arr) {
  if (isAllElementsNumber(arr)) {
    arr = arr.sort(function (a, b) {
      return a - b;
    });
    return arr;
  } else {
    arr = arr.sort();
  }
  return arr;
}

function isRangeBetweenZeroToLenght(arr) {
  arr = sortArray(arr);
  let largest = arr[arr.length - 1];
  if (arr[0] < 0 || largest > arr.length) {
    return false;
  }
  return true;
}

function allNumberAreUnique(arr) {
  arr = sortArray(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function validArray(array) {
  if (
    isArray(array) &&
    !isEmpty(array) &&
    isAllElementsNumber(array) &&
    isRangeBetweenZeroToLenght(array) &&
    allNumberAreUnique(array)
  ) {
    return true;
  }
  return false;
}

function missingNumberBetweenRangeIs(array) {
  if (validArray(array)) {
    array = sortArray(array);
    if (array[array.length - 1] != array.length) {
      return array.length;
    } else if (array[0] != 0) {
      return 0;
    } else {
      for (let i = 1; i <= array.length - 1; i++) {
        if (array[i] != i) {
          return i;
        }
      }
    }
  } else {
    alert("you should enter a valid Array");
  }
}
