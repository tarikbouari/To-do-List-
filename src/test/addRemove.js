const add = (array, element) => {
  if (element === "") return "invalid input";
  else {
    const obj = {
      description: element,
      completed: false,
      index: array.length,
    };
    array.push(obj);
  }

  return array;
};
