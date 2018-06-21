import { Controller } from "stimulus"
export default class extends Controller {
    static targets = ["charcount", "name"]
    initialize() {
        this.update()
    }
    update() {
        var countdiv = this.nameTarget.value.length
        this.charcountTarget.textContent = countdiv
    }
}