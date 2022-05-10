import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {camera} from './camera';
import {canvas} from './canvas';

export const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI / 2;
