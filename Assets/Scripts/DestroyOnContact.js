﻿#pragma strict

function OnTriggerEnter(other: Collider) {
    if(other.tag == "Boundary") {
    	return;
    }
    Destroy(other.gameObject);
	Destroy(gameObject);
	
}