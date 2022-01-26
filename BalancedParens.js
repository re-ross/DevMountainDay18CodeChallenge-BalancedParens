const hasBalancedParens = (string) => {
  const openArr = [];
  const closedArr = [];
  let result = true;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      openArr.push(string[i]);
    } else if (string[i] === ")") {
      closedArr.push(string[i]);
    }
    if (openArr.length === closedArr.length) {
      result = true;
    } else result = false;
  }
  return console.log(result);
};

hasBalancedParens("()");
hasBalancedParens("(This has (too many closes.) ) )");
