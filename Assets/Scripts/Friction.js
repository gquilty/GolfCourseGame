#pragma strict

 public var groundCollision: boolean; 
 private var ballMoving:boolean = false;
 private var movedPlayer:boolean = false;
 public var i:int;
 public var clapping : AudioClip;
 public var splash : AudioClip;
 

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
    	  Debug.Log("hit");
    	 
	}
	
var ballSpeed :float = gameObject.rigidbody.velocity.magnitude;

	if (ballSpeed > 1.00)
    {
     ballMoving = true;
     movedPlayer=false;
    }
    
    if (ballSpeed < 0.1)
    {
    	
 		ballMoving = false;
 	}
 	
    if (!ballMoving && !movedPlayer)
     {
       var changedPosition : Vector3 = gameObject.transform.position;
       changedPosition.y +=2;
       changedPosition.z +=1;
       changedPosition.x += 3;
       GameObject.Find("First Person Controller").transform.position = changedPosition;
       movedPlayer = true;
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
   
 if (collision.collider.gameObject.tag == "flagpole")
 {
  
  Destroy(gameObject);
  Application.LoadLevel("Hole2");;
  audio.PlayOneShot(clapping);
 }
 
 if (collision.collider.gameObject.tag == "flagpole2")
 {
  
  Destroy(gameObject);
  Application.LoadLevel("Hole3");;
  audio.PlayOneShot(clapping);
 }
 
 if (collision.collider.gameObject.tag == "flagpole3")
 {
  
  Destroy(gameObject);
  Application.LoadLevel("Hole4");;
  audio.PlayOneShot(clapping);
 }
 
  if (collision.collider.gameObject.tag == "flagpole4")
 {
  
  Destroy(gameObject);
  Application.LoadLevel("Hole5");;
  audio.PlayOneShot(clapping);
 }
 
  if (collision.collider.gameObject.tag == "flagpole5")
 {
  
  Destroy(gameObject);
  Application.LoadLevel("Hole6");;
  audio.PlayOneShot(clapping);
 }
 
  if (collision.collider.gameObject.tag == "flagpole6")
 {
  
  Destroy(gameObject);
  Application.LoadLevel("Hole7");;
  audio.PlayOneShot(clapping);
 }
 
 if (collision.collider.gameObject.tag == "outOfBounds")
 {
  
  Destroy(gameObject);
  audio.PlayOneShot(splash);
  
 }
 
}   

function OnCollisionExit(collision2 : Collision)
{
	if (collision2.collider.gameObject.tag == "floor")
   {
	 groundCollision = false;   
   } 
}    
   
   


