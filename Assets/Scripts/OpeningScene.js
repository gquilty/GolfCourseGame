#pragma strict

function Start () {

}

function OnGUI () {
	if (GUI.Button (Rect (150,150,200,100), "Play 9 Holes")) {
		Application.LoadLevel("Hole1");;
	}
	
	if (GUI.Button (Rect (700,150,200,100), "Driving Range")) {
		Application.LoadLevel("DrivingRange");;
		
	}
	}
	
function Update () {

   }

