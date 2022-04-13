import { Controller } from "@hotwired/stimulus";
import TomSelect from "tom-select";

export default class extends Controller {
  static values = {
    options: Object,
  };

  connect() {
    this.options = this.optionsValue;
    this.initTomSelect();
  }

  disconnect() {
    if (this.select) {
      this.select.destroy();
    }
  }

  initTomSelect() {
    if (this.element) {
      this.select = new TomSelect(this.element, this.options);
    }
  }
}
