import * as THREE from 'three';
import {Wireframe} from "three/addons";

//Сцена
const scene = new THREE.Scene()
const width = window.innerWidth, height = window.innerHeight;
const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

//Камера
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.01, 10 );
camera.position.z = 3;

//Объект
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial({wireframe:true});

const mesh = new THREE.Mesh(geometry, material);
// mesh.position.set(-1, -0.5, -0.3);
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement );

renderer.render( scene, camera );
