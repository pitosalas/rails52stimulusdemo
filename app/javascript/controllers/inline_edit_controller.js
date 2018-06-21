import { Controller } from "stimulus"
export default class extends Controller {
    static targets = ["p", "form"]
    initialize() {
    }
    toggle() {
        this.pTarget.style.display="none"
        this.formTarget.style.display="block"
    }
}