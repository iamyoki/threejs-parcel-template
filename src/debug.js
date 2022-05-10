import {camera} from './instances/camera';
import {gui} from './instances/gui';

gui.add(camera, 'fov', 0, 180).onChange(() => {
  camera.updateProjectionMatrix();
});
