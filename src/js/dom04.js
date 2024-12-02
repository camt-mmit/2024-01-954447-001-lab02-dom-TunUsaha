function createInputComponent(template) {
  return template.content.firstElementChild.cloneNode(true);
}

function appendInputComponent(inputComponent, container, output) {
  const inputComponents = container.children;
  const updateInputComponents = () => {
    [...inputComponents].forEach((component, index) => {
      component.querySelector('.app-elem-title-no').textContent = `${index + 1}`;
      component.querySelector('.app-cmd-remove-input').disabled =
        inputComponents.length === 1;
    });
  };

  const calculateResult = () => {
    const result = [...inputComponents]
      .reduce(
        (result, component) =>
          result +
          component.querySelector('input[type="number"].app-elem-input').valueAsNumber,
        0,
      );
    output.value = `${result.toLocaleString()}`;
  };

  inputComponent.addEventListener('click', (ev) => {
    if (ev.target?.matches('.app-cmd-remove-input')) {
      inputComponent.remove();
      updateInputComponents();
      calculateResult();
    }
  });

  inputComponent
    .querySelector('input[type="number"].app-elem-input')
    .addEventListener('change', calculateResult);

  container.append(inputComponent);
  updateInputComponents();
  calculateResult();
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.app-cmp-inputs-list');
  const output = document.querySelector('.app-elem-result');
  const template = document.querySelector('template.app-tmpl-input');

  const addInputComponent = () => {
    appendInputComponent(createInputComponent(template), container, output);
  };

  document
    .querySelector('.app-cmd-add-input')
    .addEventListener('click', addInputComponent);

  addInputComponent();
});

