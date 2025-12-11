# Physics-Demo
**Javascript** Physics Sandbox
Using **Node Express** to host the site

## How to run
currently you must download the source to run the project, *this will be changed in the future*. 

execute the following:
```
npm install
npm run dev
```  

---

### Inspiration
I just wanted to create something similar to [Matter.js](https://brm.io/matter-js/)

## Examples
![gif of a cube falling due to gravity](https://github.com/samatdavistech/Physics-Demo/blob/main/examples/sample.gif)

## Modularity
This project is incredibly simple but can be expanded upon very easily.
This is the base class for a body.

```javascript
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
```

Adding a static or rigid body from this base class is very simple.
```javascript
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
```

```javascript
import Body from './Body.js';

export default class StaticBody extends Body {
  constructor(position, size, color) {
    super(position, size, color);

    this.hasCollision = true;
  }
}
```

In the future, I may write a character controller of some sorts using the RigidBody as a base.
