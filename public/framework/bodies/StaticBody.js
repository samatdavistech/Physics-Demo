import Body from './Body.js';

export default class StaticBody extends Body {
  constructor(position, size, color) {
    super(position, size, color);

    this.hasCollision = true;
  }
}
