#pragma strict

var scoreValue: int;
private var gameController: GameController;

function Start() {
	var gameControllerObject : GameObject = GameObject.FindGameObjectWithTag("GameController");
	if(gameControllerObject !== null) {
		gameController = gameControllerObject.GetComponent(GameController);
	}
	if(gameControllerObject === null) {
		Debug.Log("Game Controller Object not found");
	}
}
function OnTriggerEnter(other: Collider) {
    if(other.tag == "Boundary") {
    	return;
    }
    if(other.tag == "Player") {
    	gameController.GameOver();
    }
    gameController.addScore(scoreValue);
    Destroy(other.gameObject);
	
	Destroy(gameObject);
	
}