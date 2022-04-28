import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {tick} from './helpers';

/* You can remove or modify the following quick start code */

// canvas
const canvas = document.getElementById('threejs');

// scene
const scene = new Scene();

// renderer
const renderer = new WebGLRenderer({canvas});

// camera
const camera = new PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight
);

// objects
const mesh = new Mesh(
  new BoxGeometry(1, 1, 1, 4, 4, 4),
  new MeshBasicMaterial({color: 'royalblue', wireframe: true})
);
scene.add(mesh);

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI / 2;

camera.position.set(2, 2, 2);

handleResize();

tick(() => {
  render();
  controls.update();
});

// fn
function render() {
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);
}

function handleResize() {
  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    render();
  });
}
