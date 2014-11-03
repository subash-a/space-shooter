#pragma strict

var spawnValues: Vector3;
var hazard: GameObject;

function SpawnWaves() {
	var spawnPosition = new Vector3(spawnValues.x, spawnValues.y, spawnValues.z);
	var spawnRotation = new Quaternion();
	Instantiate(hazard, spawnPosition, spawnRotation);
}

function Start() {
	SpawnWaves();
}