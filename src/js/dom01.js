document.addEventListener('DOMContentLoaded', () => {
  const inputElements = document.querySelectorAll('.app-elem-input');
  const resultElement = document.querySelector('output.app-elem-result');

  const updateResult = () =>
  (resultElement.value = [...inputElements].reduce(
    (result, element) => result + element.valueAsNumber,
    0,
  ).toLocaleString());

  inputElements.forEach((element) =>
    element.addEventListener('change', updateResult),
  );

  updateResult();
});
