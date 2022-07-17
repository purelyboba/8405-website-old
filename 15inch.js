var container = document.getElementById('threejs-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80, container.offsetWidth/container.offsetHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({alpha: true});
var width = container.offsetWidth;
var height = container.offsetHeight;
console.log(width, height);
renderer.setSize(width, height);
container.appendChild(renderer.domElement);

const icosahedronGeometry = new THREE.IcosahedronGeometry(2, 1);
const icosahedronMaterial = new THREE.MeshStandardMaterial({color: 0x00FFFF, wireframe: true});
const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
icosahedron.position.set(0, 0, 0);

scene.add(icosahedron);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(pointLight, ambientLight);

//const lightHelper = new THREE.PointLightHelper(pointLight, 1);
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper);

function animate(){
    requestAnimationFrame(animate);
    icosahedron.rotation.x += 0.001;
    icosahedron.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();