export default class Body {
  constructor(position, size, color) {
    this.position = position;
    this.size = size;
    this.color = color;

    this.hasCollision = false;
  }

  render(env) {
    const renderer = env.renderer;

    renderer.fillStyle = this.color;
    renderer.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  hasCollision(env, newPosition) {
    for (const object of env.objects) {
      if (object != this && object.hasCollision && object.isInside(newPosition)) {
        return true;
      }
    }

    return false;
  }

  isInside(position) {
    if (position.x >= this.position.x - this.size.x && position.x <= this.position.x + this.size.x) {
      if (position.y >= this.position.y - this.size.y && position.y <= this.position.y + this.size.y) {
        return true;
      }
    }
  }
}
