import { processHtml } from './q1';

describe('processHtml', () => {
  let outputContainer;

  beforeEach(() => {
    document.body.innerHTML = '<div id="outputContainer"></div>';
    outputContainer = document.getElementById('outputContainer');
  });

  test('should handle empty input array', () => {
    processHtml([]);
    expect(outputContainer.textContent).toBe('');
  });

  test('should handle null input', () => {
    processHtml(null);
    expect(outputContainer.textContent).toBe('');
  });

  test('should process array and generate correct HTML string', () => {
    const inputArray = ['div', 'span', 'p'];
    processHtml(inputArray);
    const expectedOutput = `<div>
  <span>
    <p>
    </p>
  </span>
</div>
    `
      .replace(/\s+/g, ' ')
      .trim();
    expect(outputContainer.textContent.replace(/\s+/g, ' ').trim()).toBe(
      expectedOutput
    );
  });

  test('should process array with single element', () => {
    const inputArray = ['div'];
    processHtml(inputArray);
    const expectedOutput = `<div>
</div>
`;
    expect(outputContainer.textContent).toBe(expectedOutput);
  });
});
