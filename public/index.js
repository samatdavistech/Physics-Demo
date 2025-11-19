import RigidBody from './framework/bodies/RigidBody.js';
import StaticBody from './framework/bodies/StaticBody.js';

import Environment from './framework/Environment.js';

const env = new Environment('physics-canvas');

env.objects = [
  new RigidBody({x: 100, y: 100}, {x: 100, y: 100}, 'red'),
  new StaticBody({x: 50, y: 700}, {x: 500, y: 100}, 'green'),
];

env.runSimulation();
