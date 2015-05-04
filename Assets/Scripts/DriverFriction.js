#pragma strict

 public var groundCollision: boolean; 
 private var ballMoving:boolean = false;

 
 

function Start () 
{
	
}

function Update ()
{
   

  Debug.Log(groundCollision);
  

if (groundCollision == true)

	{
	      
  		  var frictionForce : Vector3 = gameObject.rigidbody.velocity*-1;     
    	  gameObject.rigidbody.AddForce(frictionForce);
    	  
    	 
	}
	
var ballSpeed :float = gameObject.rigidbody.velocity.magnitude;

	if (ballSpeed > 1.00)
    {
     ballMoving = true;
     
    }
    
    if (ballSpeed < 0.1)
    {
    	
 		ballMoving = false;
 	}
 	
    if (!ballMoving)
     {

       GameObject.Find("Camera1").gameObject.camera.rect = Rect(0,0,1,1);
	   GameObject.Find("Camera2").gameObject.camera.rect = Rect(0,0,0,0);
      
     } 
}

function OnCollisionEnter(collision : Collision)
{ 
 if (collision.collider.gameObject.tag == "floor")
   {
	 groundCollision = true;   
   }  
   
 
 if (collision.collider.gameObject.tag == "outOfBounds")
 {
  Destroy(gameObject);
  
 }
 
 if (collision.collider.gameObject.tag == "25")
 {
   Debug.Log("hitTarget");
   GameObject.Find("Launcher").GetComponent(DrivingLauncher).increaseScore25();
   
 }
 
 if (collision.collider.gameObject.tag == "50")
 {
   GameObject.Find("Launcher").GetComponent(DrivingLauncher).increaseScore50();
   
  
 }
 
 if (collision.collider.gameObject.tag == "75")
 {
   GameObject.Find("Launcher").GetComponent(DrivingLauncher).increaseScore75();
   
 }
 
 if (collision.collider.gameObject.tag == "100")
 {
 
   GameObject.Find("Launcher").GetComponent(DrivingLauncher).increaseScore100();
   
  
 }
 
}   

function OnCollisionExit(collision2 : Collision)
{
	if (collision2.collider.gameObject.tag == "floor")
   {
	 groundCollision = false;   
   } 
   
   
    
 
 
}    
   