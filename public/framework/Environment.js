export default class Environment {
  constructor(canvasID) {
    this.canvas = document.getElementById(canvasID);

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.renderer = this.canvas.getContext('2d');
    this.objects = [];
  }

  #tick() {
    this.renderer.clearRect(0, 0, this.width, this.height); // Clear the canvas

    for (const object of this.objects) {
      object.render(this);
    }

    requestAnimationFrame(() => this.#tick());
  }


  runSimulation() {
    this.#tick();
  }
}
