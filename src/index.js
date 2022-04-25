import {WebGLRenderer} from 'three';

const renderer = new WebGLRenderer();
renderer.setSize(innerWidth, innerHeight, false);
document.body.appendChild(renderer.domElement);
