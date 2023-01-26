interface initData {
  element?: HTMLInputElement
  activeClass: string
}

export default class FloatingPlaceholder {
  private element ?: HTMLInputElement;
  private activeClass: string;

  constructor({element = null, activeClass = 'active'}: initData) {
    this.element = element;
    this.activeClass = activeClass;
    if (this.element) {
      this.input();
      this.element.addEventListener("input", () => this.input());
    }
  }

  input(): void {
    let parent = this.element.parentElement;
    let label = parent ? parent.querySelector("label") : null;
    if (
      label &&
      this.element.value &&
      !label.classList.contains(this.activeClass)
    ) {
      label.classList.add(this.activeClass);
    } else if (
      label &&
      !this.element.value &&
      label.classList.contains(this.activeClass)
    ) {
      label.classList.remove(this.activeClass);
    }
  }
}
