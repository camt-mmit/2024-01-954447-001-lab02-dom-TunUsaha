function createInputComponent(number) {
  const component = document.createElement('div');
  component.classList.add('app-cmp-input');
  component.innerHTML = `<label>
      <b class="app-elem-title">Number ${number}</b>
      <input type="number" value="0" class="app-elem-input">
    </label>`;
  return component;
}

function appendInputComponent(inputComponent, container, output) {
  const calculateResult = () => {
    const result = [...container.querySelectorAll('.app-cmp-input input')]
      .reduce((sum, input) => sum + input.valueAsNumber, 0);
    output.value = result.toLocaleString();
  };

  inputComponent.querySelector('input').addEventListener('change', calculateResult);
  container.append(inputComponent);
  calculateResult();
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.app-cmp-inputs-list');
  const output = document.querySelector('.app-elem-result');
  let number = 1;

  const addInputComponent = () => appendInputComponent(createInputComponent(number++), container, output);

  document.querySelector('.app-cmd-add-input-component').addEventListener('click', addInputComponent);
  addInputComponent();
});

