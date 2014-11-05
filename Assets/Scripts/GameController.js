#pragma strict

var spawnValues: Vector3;
var hazard: GameObject;
var hazardCount: int;//Number of Hazards to spawn
var spawnWait: float;//Wait for these many seconds before spawing next asteriod
var waveWait: float;//Wait for these many seconds before spawning next wave
var startWait: float;//Wait for these many seconds before starting the asteriod wave
var loopCount: int;
var scoreText: GUIText;
var score: int;

function SpawnWaves() {
	yield WaitForSeconds(startWait);
	while(true) {
		for(loopCount = 0; loopCount < hazardCount; loopCount++) {
			var spawnPosition = new Vector3(Random.Range(-spawnValues.x,spawnValues.x), spawnValues.y, spawnValues.z);
			var spawnRotation = Quaternion.identity;
			Instantiate(hazard, spawnPosition, spawnRotation);
			yield WaitForSeconds(spawnWait);
		}
		yield WaitForSeconds(waveWait);
	};
}

function addScore(newScore: int) {
	score = score + newScore;
	updateScore();
}

function updateScore() {
	scoreText.text = "Score: " + score;
}

function Start() {
	score = 0;
	updateScore();
	SpawnWaves();
}