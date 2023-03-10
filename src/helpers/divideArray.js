export const divideArray = (array) => {
  if (!array || array.length < 1) return [];

  const middleIndex = Math.ceil(array.length / 2);
  const newArray = [...array];

  const firstHalf = newArray.splice(0, middleIndex);
  const secondHalf = newArray.splice(-middleIndex);

  return [firstHalf, secondHalf];
};
