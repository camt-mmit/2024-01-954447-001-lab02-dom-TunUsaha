const createInputComponent = (template) =>
  template.content.cloneNode(true).firstElementChild;

const appendInputComponent = (inputComponent, container, output) => {
  const calculateResult = () =>
  (output.value = [...container.querySelectorAll('.app-cmp-input input')]
    .reduce((result, element) => result + element.valueAsNumber, 0)
    .toLocaleString());

  inputComponent
    .querySelector('input')
    .addEventListener('change', calculateResult);

  container.append(inputComponent);
  calculateResult();
};

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.app-cmp-inputs-list');
  const output = document.querySelector('.app-elem-result');
  const template = document.querySelector('template.app-tmpl-input');

  document
    .querySelector('.app-cmd-add-input')
    .addEventListener('click', () =>
      appendInputComponent(createInputComponent(template), container, output));

  appendInputComponent(createInputComponent(template), container, output);
});

