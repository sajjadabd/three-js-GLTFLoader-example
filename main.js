import './style.css'

import { GLTFLoader } from './js/GLTFLoader.js';
import { OrbitControls } from './js/OrbitControls';

import * as THREE from 'three';




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


camera.position.z = 5;

const directionalLight1 = new THREE.DirectionalLight( 0xffffff, 2 );
directionalLight1.position.z = -10;
directionalLight1.position.y = -10;
scene.add( directionalLight1 );

const directionalLight2 = new THREE.DirectionalLight( 0xcccccc, 2 );
directionalLight2.position.z = 10;
scene.add( directionalLight2 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

function animate() {
	requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
}

animate();





const loader = new GLTFLoader();

loader.load( './monkey.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );


document.body.appendChild( renderer.domElement );

// document.querySelector('#app').innerHTML = `
//   <h1>Hello World</h1>
// `


