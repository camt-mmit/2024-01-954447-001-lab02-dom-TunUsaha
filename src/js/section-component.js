import { assignComponent as assignInputsComponent } from './inputs-component.js';

function createComponent(template) {
  return template.content.cloneNode(true).firstElementChild;
}

export function assignComponent(element) {
  const template = document.querySelector('template.app-tmpl-section');
  const container = element.querySelector('.app-cmp-sections-list');

  const updateSections = () => {
    const sections = [...container.querySelectorAll('.app-cmp-section')];
    sections.forEach((section, index) => {
      const header = section.querySelector('h1');
      if (header) header.textContent = `Section ${index + 1}`;
    });

    sections.forEach((section) => {
      const removeButton = section.querySelector('.app-cmd-remove-section');
      if (removeButton) {
        removeButton.disabled = sections.length === 1;
      }
    });
  };

  const addComponent = () => {
    const sectionComponent = createComponent(template);

    assignInputsComponent(sectionComponent);

    const removeButton = sectionComponent.querySelector(
      '.app-cmd-remove-section',
    );
    if (removeButton) {
      removeButton.addEventListener('click', () => {
        sectionComponent.remove();
        updateSections();
      });
    }

    container.append(sectionComponent);
    updateSections();
  };

  element.addEventListener('click', (ev) => {
    if (ev.target?.matches('.app-cmd-add-section')) {
      addComponent();
    }
  });

  addComponent();
}

