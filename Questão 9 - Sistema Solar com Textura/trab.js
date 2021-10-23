var width = window.innerWidth;
var height = window.innerHeight;
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement );

var camera;
camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 9999 );
camera.position.set( 0.00044621789958779537, 266.64999999962663, -50 );

var controls;
controls = new THREE.OrbitControls( camera );
controls.minDistance = 1;
controls.maxDistance = 9999;

Fundotexture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/Luan7sn/Computacao_Grafica/master/Trabalho%20Final/Imagens/galaxy_starfield.png' );
var FundoGeometry = new THREE.SphereGeometry(100, 32, 32);
var FundoMaterial = new THREE.MeshLambertMaterial( { map: Fundotexture, side: THREE.BackSide } );
var Fundo = new THREE.Mesh( FundoGeometry, FundoMaterial );
Fundo.position.set(0,0,0);
scene.add(Fundo);

Soltexture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/Luan7sn/Computacao_Grafica/master/Trabalho%20Final/Imagens/sunmap.jpg' );
var SolGeometry = new THREE.SphereGeometry( 1.651, 32, 32 );
var SolMaterial = new THREE.MeshLambertMaterial( { map: Soltexture } );
var Sol = new THREE.Mesh( SolGeometry, SolMaterial );
Sol.position.set(0,0,-5);
Sol.rotation.y = 2;
Sol.rotation.x = 2;
scene.add(Sol);

Mercuriotexture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/Luan7sn/Computacao_Grafica/master/Trabalho%20Final/Imagens/mercurybump.jpg' );
var MercurioGeometry = new THREE.SphereGeometry( 0.058, 32, 32 );
var MercurioMaterial = new THREE.MeshLambertMaterial( { map: Mercuriotexture } );
var Mercurio = new THREE.Mesh( MercurioGeometry, MercurioMaterial );
Mercurio.position.set(0,0,-5);
Mercurio.rotation.y = 2;
Mercurio.rotation.x = 2;
scene.add(Mercurio);

Venustexture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/Luan7sn/Computacao_Grafica/master/Trabalho%20Final/Imagens/venusmap.jpg' );
var VenusGeometry = new THREE.SphereGeometry( 0.14, 32, 32 );
var VenusMaterial = new THREE.MeshLambertMaterial( { map: Venustexture } );
var Venus = new THREE.Mesh( VenusGeometry, VenusMaterial );
Venus.position.set(0,0,-5);
Venus.rotation.y = 2;
Venus.rotation.x = 2;
scene.add(Venus);

Terratexture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/Luan7sn/Computacao_Grafica/master/Trabalho%20Final/Imagens/earthmap1k.jpg' );
var TerraGeometry = new THREE.SphereGeometry( 0.15, 32, 32 );
var TerraMaterial = new THREE.MeshLambertMaterial( { map: Terratexture } );
var Terra = new THREE.Mesh( TerraGeometry, TerraMaterial );
Terra.position.set(0,0,-5);
Terra.rotation.y = 2;
Terra.rotation.x = 2;
scene.add(Terra);

Martetexture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/Luan7sn/Computacao_Grafica/master/Trabalho%20Final/Imagens/mars_1k_color.jpg' );
var MarteGeometry = new THREE.SphereGeometry( 0.08, 32, 32 );
var MarteMaterial = new THREE.MeshLambertMaterial( { map: Martetexture } );
var Marte = new THREE.Mesh( MarteGeometry, MarteMaterial );
Marte.position.set(0,0,-5);
Marte.rotation.y = 2;
Marte.rotation.x = 2;
scene.add(Marte);

Jupitertexture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/Luan7sn/Computacao_Grafica/master/Trabalho%20Final/Imagens/jupitermap.jpg' );
var JupiterGeometry = new THREE.SphereGeometry( 1.7, 32, 32 );
var JupiterMaterial = new THREE.MeshLambertMaterial( { map: Jupitertexture } );
var Jupiter = new THREE.Mesh( JupiterGeometry, JupiterMaterial );
Jupiter.position.set(0,0,-5);
Jupiter.rotation.y = 2;
Jupiter.rotation.x = 2;
scene.add(Jupiter);

Saturnotexture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/Luan7sn/Computacao_Grafica/master/Trabalho%20Final/Imagens/saturnmap.jpg' );
var SaturnoGeometry = new THREE.SphereGeometry( 1.4, 32, 32 );
var SaturnoMaterial = new THREE.MeshLambertMaterial( { map: Saturnotexture } );
var Saturno = new THREE.Mesh( SaturnoGeometry, SaturnoMaterial );
Saturno.position.set(0,0,-5);
Saturno.rotation.y = 2;
Saturno.rotation.x = 2;
scene.add(Saturno);

Uranotexture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/Luan7sn/Computacao_Grafica/master/Trabalho%20Final/Imagens/uranusmap.jpg' );
var UranoGeometry = new THREE.SphereGeometry( 0.6, 32, 32 );
var UranoMaterial = new THREE.MeshLambertMaterial( { map: Uranotexture } );
var Urano = new THREE.Mesh( UranoGeometry, UranoMaterial );
Urano.position.set(0,0,-5);
Urano.rotation.y = 2;
Urano.rotation.x = 2;
scene.add(Urano);

Netunotexture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/Luan7sn/Computacao_Grafica/master/Trabalho%20Final/Imagens/neptunemap.jpg' );
var NetunoGeometry = new THREE.SphereGeometry( 0.6, 32, 32 );
var NetunoMaterial = new THREE.MeshLambertMaterial( { map: Netunotexture } );
var Netuno = new THREE.Mesh( NetunoGeometry, NetunoMaterial )
Netuno.position.set(0,0,-5);
Netuno.rotation.y = 2;
Netuno.rotation.x = 2;
scene.add(Netuno);

var light = new THREE.AmbientLight(0xFFFFFF);
light.position.x = 0;
light.position.y = 10;
light.position.z = 0;
scene.add(light);

var AuxiliarMercurio = 0;
var AuxiliarVenus = 0;
var AuxiliarTerra = 0;
var AuxiliarMarte = 0;
var AuxiliarJupiter = 0;
var AuxiliarSaturno = 0;
var AuxiliarUrano = 0;
var AuxiliarNetuno = 0;

function animate() {

	AuxiliarMercurio += 0.0113675116516;
	AuxiliarVenus += 0.00445037;
	AuxiliarTerra += 0.002737775;
	AuxiliarMarte += 0.0014556464525;
	AuxiliarJupiter += 0.00002310055672341703;
	AuxiliarSaturno += 0.000009312461004069545;
	AuxiliarUrano += 0.000003271314659578818;
	AuxiliarNetuno += 0.000001673421712312033;

	Mercurio.rotation.y += 0.000007104290991759022;
	Venus.rotation.y += 0.0000017146070806414;
	Terra.rotation.y += 0.0042444;
	Marte.rotation.y += 0.004103405;
	Jupiter.rotation.y += 0.01047120418848168;
	Saturno.rotation.y += 0.00961538461538462;
	Urano.rotation.y += 0.00582072176949942;
	Netuno.rotation.y += 0.00618429189857761;

	Mercurio.position.x = 3.45 * Math.sin(AuxiliarMercurio);
	Mercurio.position.y = 3.45 * Math.cos(AuxiliarMercurio);

	Venus.position.x = 6.4 * Math.sin(AuxiliarVenus);
	Venus.position.y = 6.4 * Math.cos(AuxiliarVenus);

	Terra.position.x = 8.85 * Math.sin(AuxiliarTerra);
	Terra.position.y = 8.85 * Math.cos(AuxiliarTerra);

	Marte.position.x = 13.5 * Math.sin(AuxiliarMarte);
	Marte.position.y = 13.5 * Math.cos(AuxiliarMarte);

	Jupiter.position.x = 46.15 * Math.sin(AuxiliarJupiter);
	Jupiter.position.y = 46.15 * Math.cos(AuxiliarJupiter);

	Saturno.position.x = 84.65 * Math.sin(AuxiliarSaturno);
	Saturno.position.y = 84.65 * Math.cos(AuxiliarSaturno);

	Urano.position.x = 170.2 * Math.sin(AuxiliarUrano);
	Urano.position.y = 170.2 * Math.cos(AuxiliarUrano);

	Netuno.position.x = 266.65 * Math.sin(AuxiliarNetuno);
	Netuno.position.y = 266.65 * Math.cos(AuxiliarNetuno);

	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );

}
animate();