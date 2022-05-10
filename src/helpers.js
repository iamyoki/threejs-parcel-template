import {camera} from './instances/camera';
import {canvas} from './instances/canvas';
import {renderer} from './instances/renderer';
import {scene} from './instances/scene';

/**
 * @param {(time: number)=>boolean} callback¡
 */
export function tick(callback, time = 0) {
  const next = callback(time);
  if (next !== false) {
    requestAnimationFrame(time => {
      tick(callback, time);
    });
  }
}

export function handleResize() {
  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    render();
  });
}

export function render() {
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);
}
