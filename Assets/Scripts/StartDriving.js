#pragma strict


public var p:GameObject;
public var golfBall:GameObject;

function Start ()
{
	p = Instantiate(golfBall,gameObject.transform.position+gameObject.transform.forward*2,gameObject.transform.rotation);
	p.name = "Ball";
	
	
}

function Update () {

 if (p == null)
 {
    p = Instantiate(golfBall,gameObject.transform.position+gameObject.transform.forward*2,gameObject.transform.rotation);
	p.name = "Ball";
	
 }

}