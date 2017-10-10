function add_Fbx(fbxs){
		var manager = new THREE.LoadingManager();
				manager.onProgress = function( item, loaded, total ) {

					console.log( item, loaded, total );

				};

				var onProgress = function( xhr ) {

					if ( xhr.lengthComputable ) {

						var percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round( percentComplete, 2 ) + '% downloaded' );

					}

				};

				var onError = function( xhr ) {

					console.error( xhr );

				};

				var loader = new THREE.FBXLoader( manager );
				loader.load( fbxs.fbxurl, function( object ) {

					console.log(object);
					object.position.set(fbxs.px,fbxs.py,fbxs.pz);
					object.rotation.set(fbxs.rx,fbxs.ry,fbxs.rz);
					Myobj = object;
					//signals.objectSelected.dispatch( object ); // 加边框
					//scene.add( object );
					
					//get_Light(function(datas){
					//	scene_lights = new SceneLight(datas,scene,object,modelname);
					//});
					
					for (var i = 0; i < object.children.length; i++) {
						object.children[i].castShadow = true;
						//object.children[i].receiveShadow = true;
			
						/*object.children[i].material = new THREE.MeshStandardMaterial({
							map:object.children[i].material.map,
							metalness:1,
							roughness:0.6
						});*/
						
						//object.children[i].material.envMap = skyTextmap;
						//fbxObjs.push(object.children[i]);
					}
					object.scale.set(0.01,0.01,0.01);
					object.name = fbxs.fbxurl;
					/*Trancontrol.attach( object );
					
					scene.add( Trancontrol );*/
					fbxs.arWorldRoot.add( object );
					fbxs.onRenderFcts.push(function(delta){
		object.rotation.y += Math.PI*delta
	})
				}, onProgress, onError );
	}

function add_jj(object)
{
	for (var i = 0; i < object.children.length; i++) {
						
			
						object.children[i].material = new THREE.MeshStandardMaterial({
							map:object.children[i].material.map,
							metalness:0.5,
							roughness:0.1
						});
					
						object.children[i].material.envMap = skyTextmap;
						
					}
}
function add_jjj(object)
{
	for (var i = 0; i < object.children.length; i++) {
	
		object.children[i].rotation.x+=0.1;
		
	}
}