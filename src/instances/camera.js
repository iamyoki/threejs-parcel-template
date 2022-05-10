import {PerspectiveCamera} from 'three';
import {canvas} from './canvas';

export const camera = new PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight
);

camera.position.set(2, 2, 2);
