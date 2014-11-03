#pragma strict
var speed : float;
function Start () {
	rigidbody.velocity = transform.forward * speed;
}

function Update () {

}