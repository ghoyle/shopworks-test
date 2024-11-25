const insertPadding = (index, length) => {
  const space = ' ';
  return space.repeat(2 * (length - 1 - index));
};

const insertNewline = () => '\n';

const createHtmlString = (
  elementName,
  index,
  arrayLength,
  isClosing = false
) => {
  const element = isClosing ? `</${elementName}>` : `<${elementName}>`;

  return insertPadding(index, arrayLength) + element + insertNewline();
};

const createHtmlContainer = () => {
  let outputHtml = document.createElement('div');
  outputHtml.id = 'outputContainer';
  document.body.appendChild(outputHtml);
  return outputHtml;
};

export const processHtml = (inputArray) => {
  let outputHtml = document.getElementById('outputContainer');
  if (!outputHtml) {
    outputHtml = createHtmlContainer();
  }
  let outputString = '';
  // Handle empty input array
  if (!inputArray || !inputArray?.length || !Array.isArray(inputArray)) {
    outputHtml.textContent = outputString;
    return;
  }
  // Use spread operator to avoid mutating the original array
  const reversedArray = [...inputArray].reverse();
  const arrayLength = reversedArray.length;
  reversedArray.forEach((item, index) => {
    const openingTag = createHtmlString(item, index, arrayLength);
    const closingTag = createHtmlString(item, index, arrayLength, true);
    outputString = openingTag + outputString + closingTag;
  });

  outputHtml.textContent = outputString;
};
