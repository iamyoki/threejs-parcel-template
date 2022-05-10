import {BoxBufferGeometry, Mesh, MeshBasicMaterial} from 'three';

export const box = new Mesh(
  new BoxBufferGeometry(1, 1, 1, 4, 4, 4),
  new MeshBasicMaterial({color: 'royalblue', wireframe: true})
);
