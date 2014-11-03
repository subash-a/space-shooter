#pragma strict
var minX = 0;
var maxX = 0; 
var minZ = 0;
var maxZ = 0;
var shot: GameObject;
var shotSpawn: Transform;
var fireRate: float;
var nextFire: float;

function Start () {

}

function Update () {
if(Input.GetButton("Fire1") && Time.time > nextFire) {
	nextFire = Time.time + fireRate;
	var newShot : GameObject;
	newShot = Instantiate (shot, shotSpawn.position, shotSpawn.rotation);
    }    
}

function FixedUpdate () {
	var horizontalMovement = Input.GetAxis("Horizontal");
    var verticalMovement = Input.GetAxis("Vertical");
    var movement = new Vector3(horizontalMovement, 0.0, verticalMovement);    
    rigidbody.velocity = movement;
    rigidbody.position = new Vector3 (
    	Mathf.Clamp(rigidbody.position.x,minX,maxX),
    	0.0,
    	Mathf.Clamp(rigidbody.position.z, minZ, maxZ)
    );
}
