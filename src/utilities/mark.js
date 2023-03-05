export const marked = (arr, r, c, newNonBombCount) => {
  if (arr[r][c].marked) return;

  let flipped = [];
  flipped.push(arr[r][c]);

  while (flipped.length !== 0) {
    let single = flipped.pop();

    if (!single.marked) {
      newNonBombCount++;
      single.marked = true;
    }

    if (single.value !== 0) {
      break;
    }

    if (
      single.r > 0 &&
      single.c > 0 &&
      arr[single.r - 1][single.c - 1].value === 0 &&
      !arr[single.r - 1][single.c - 1].marked
    ) {
      flipped.push(arr[single.r - 1][single.c - 1]);
    }

    if (
      single.r < arr.length - 1 &&
      single.c < arr[0].length - 1 &&
      arr[single.r + 1][single.c + 1].value === 0 &&
      !arr[single.r + 1][single.c + 1].marked
    ) {
      flipped.push(arr[single.r + 1][single.c + 1]);
    }

    if (
      single.r < arr.length - 1 &&
      single.c > 0 &&
      arr[single.r + 1][single.c - 1].value === 0 &&
      !arr[single.r + 1][single.c - 1].marked
    ) {
      flipped.push(arr[single.r + 1][single.c - 1]);
    }

    if (
      single.r > 0 &&
      single.c < arr[0].length - 1 &&
      arr[single.r - 1][single.c + 1].value === 0 &&
      !arr[single.r - 1][single.c + 1].marked
    ) {
      flipped.push(arr[single.r - 1][single.c + 1]);
    }

    if (
      single.r > 0 &&
      arr[single.r - 1][single.c].value === 0 &&
      !arr[single.r - 1][single.c].marked
    ) {
      flipped.push(arr[single.r - 1][single.c]);
    }

    if (
      single.r < arr.length - 1 &&
      arr[single.r + 1][single.c].value === 0 &&
      !arr[single.r + 1][single.c].marked
    ) {
      flipped.push(arr[single.r + 1][single.c]);
    }

    if (
      single.c > 0 &&
      arr[single.r][single.c - 1].value === 0 &&
      !arr[single.r][single.c - 1].marked
    ) {
      flipped.push(arr[single.r][single.c - 1]);
    }

    if (
      single.c < arr[0].length - 1 &&
      arr[single.r][single.c + 1].value === 0 &&
      !arr[single.r][single.c + 1].marked
    ) {
      flipped.push(arr[single.r][single.c + 1]);
    }

    if (
      single.r > 0 &&
      single.c > 0 &&
      !arr[single.r - 1][single.c - 1].marked
    ) {
      arr[single.r - 1][single.c - 1].marked = true;
      newNonBombCount--;
    }

    if (single.c > 0 && !arr[single.r][single.c - 1].marked) {
      arr[single.r][single.c - 1].marked = true;
      newNonBombCount--;
    }

    if (
      single.r < arr.length - 1 &&
      single.c > 0 &&
      !arr[single.r][single.c - 1].marked
    ) {
      arr[single.r + 1][single.c - 1].marked = true;
      newNonBombCount--;
    }

    if (single.r > 0 && !arr[single.r - 1][single.c].marked) {
      arr[single.r - 1][single.c].marked = true;
      newNonBombCount--;
    }

    if (single.r < arr.length - 1 && !arr[single.r + 1][single.c].marked) {
      arr[single.r + 1][single.c].marked = true;
      newNonBombCount--;
    }

    if (
      single.r > 0 &&
      single.c < arr[0].length - 1 &&
      !arr[single.r][single.c + 1].marked
    ) {
      arr[single.r - 1][single.c + 1].marked = true;
      newNonBombCount--;
    }

    if (single.c < arr[0].length - 1 && !arr[single.r][single.c + 1].marked) {
      arr[single.r][single.c + 1].marked = true;
      newNonBombCount--;
    }

    if (
      single.r < arr.length - 1 &&
      single.c < arr[0].length - 1 &&
      !arr[single.r + 1][single.c + 1].marked
    ) {
      arr[single.r + 1][single.c + 1].marked = true;
      newNonBombCount--;
    }
  }
  return { arr, newNonBombCount };
};
