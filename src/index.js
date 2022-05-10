import './debug';
import {handleResize, render, tick} from './helpers';
import {controls} from './instances/controls';
import {scene} from './instances/scene';
import {box} from './meshes/box';

// scene
scene.add(box);

// animate
tick(() => {
  render();
  controls.update();
});

// events
handleResize();
