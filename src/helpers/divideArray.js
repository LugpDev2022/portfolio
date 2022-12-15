export const divideArray = (array) => {
  if (!array) return [];

  const middleIndex = Math.ceil(array.length / 2);

  const firstHalf = array.slice().splice(0, middleIndex);
  const secondHalf = array.slice().splice(-middleIndex);

  return [firstHalf, secondHalf];
};
