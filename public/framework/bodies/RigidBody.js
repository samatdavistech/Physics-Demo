import Body from './Body.js';

export default class RigidBody extends Body {
  constructor(position, size, color) {
    super(position, size, color);

    this.speed = 0;
    this.hasCollision = true;
  }

  render(env) {
    super.render(env);


    const newPosition = { x: this.position.x, y: this.position.y + this.speed };

    if (!super.hasCollision(env, newPosition)) {
      this.speed += 1;
      this.position = newPosition;
    }
  }
}
