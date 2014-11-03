#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerExit(other: Collider) {
	Destroy(other.gameObject);
}