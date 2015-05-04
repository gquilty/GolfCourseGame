#pragma strict

function Start () {

}

function Update () {

 GameObject.Find("End").guiText.text = " You have Finished, Well Done " ;
 
}

function OnGUI () {
	if (GUI.Button (Rect (150,150,200,100), "Finish")) {
		Application.LoadLevel("OpeningScreen");;
	}
	}