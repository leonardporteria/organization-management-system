export const removeDuplicates = (arr) => {
  const uniqueObjects = [];
  const uniqueValues = new Set();

  for (const obj of arr) {
    const objString = JSON.stringify(obj);

    if (!uniqueValues.has(objString)) {
      uniqueValues.add(objString);
      uniqueObjects.push(obj);
    }
  }

  return uniqueObjects;
};
