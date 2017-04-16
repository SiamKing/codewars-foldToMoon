function foldTo(distance) {

  let count;
  distance > 0 ? count = 0 : count = null;
  while (distance > .0001) {
    count += 1;
    distance /= 2;
  }

  return count;
}
