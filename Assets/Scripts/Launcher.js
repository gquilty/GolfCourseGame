#pragma strict
public var projectile:GameObject;
public var putt: boolean;
public var timeCount : float;
public var seconds : double;
public var guitexture : GUITexture;
public var zeroTexture: Texture;
public var quaterTexture: Texture;
public var halfTexture: Texture;
public var tquaterTexture: Texture;
public var fullTexture: Texture;
public var puttSpeed;
public var driveSpeed;
public var shots:int ;
public var club : AudioClip;


function Start ()
{
  putt = false;
  seconds = 0;
  shots= 0;
}

function Update ()
{
  
  	timeCount = timeCount + (Time.deltaTime);
    seconds = timeCount;
  	Debug.Log(seconds);
  	
  	if(timeCount >= 0.0 && timeCount <= 0.2)
  	{
  	 guitexture.texture = zeroTexture;
  	 puttSpeed = GameObject.Find("First Person Controller").transform.forward*5;
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*10;
  	}
  	
  	if(timeCount >= 0.3 && timeCount <= 0.5)
  	{
  	 guitexture.texture = quaterTexture;
  	 puttSpeed = GameObject.Find("First Person Controller").transform.forward*10;
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*20;
  	}
  	
  	if(timeCount >= 0.6 && timeCount <= 0.8)
  	{
  	 guitexture.texture = halfTexture;
  	 puttSpeed = GameObject.Find("First Person Controller").transform.forward*15;
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*30;
  	}
  	
  	if(timeCount >= 0.9 && timeCount <= 1)
  	{
  	 guitexture.texture = tquaterTexture;
  	 puttSpeed = GameObject.Find("First Person Controller").transform.forward*25;
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*40;
  	}
  	
  	if(timeCount >= 1.1 && timeCount <= 1.3)
  	{
  	 guitexture.texture = fullTexture;
  	 puttSpeed = GameObject.Find("First Person Controller").transform.forward*30;
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*50;
  	}
  	
  	
  	if(timeCount >= 1.4 && timeCount <= 1.6)
  	{
  	 guitexture.texture = tquaterTexture;
  	 puttSpeed = GameObject.Find("First Person Controller").transform.forward*25;
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*35;
  	}
  	
  	if(timeCount >= 1.6 && timeCount <= 1.8)
  	{
  	 guitexture.texture = halfTexture;
  	 puttSpeed = GameObject.Find("First Person Controller").transform.forward*15;
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*20;
  	}
  	
  	if(timeCount >= 1.8 && timeCount <= 2.0)
  	{
  	 guitexture.texture = quaterTexture;
  	 puttSpeed = GameObject.Find("First Person Controller").transform.forward*10;
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*15;
  	}
  	
  	if(timeCount >= 2.0 && timeCount <= 2.2)
  	{
  	  timeCount = 0;
  	}
  	
  	
    GameObject.Find("Camera2").transform.LookAt(GameObject.Find("Ball").transform);
 
  if(Input.GetKeyUp(KeyCode.F) && GameObject.Find("Ball").rigidbody.velocity.magnitude <=0.1 )
  { 
    shots++;
  	var shootingDirection : Vector3;
  
  	if(putt)
  	{
 	 
	 shootingDirection = puttSpeed;  
 	 GameObject.Find("Ball").rigidbody.AddForce(shootingDirection, ForceMode.Impulse);
    }
  
 	 if(!putt)
  	{
  	  
      GameObject.Find("golfclub").animation.Play("Swing");
  	  GameObject.Find("Camera1").gameObject.camera.rect = Rect(0,0,0,0);
  	  GameObject.Find("Camera2").gameObject.camera.rect = Rect(0,0,1,1);
      shootingDirection = driveSpeed;  
      shootingDirection.y += 10;
      GameObject.Find("Ball").rigidbody.AddForce(shootingDirection, ForceMode.Impulse);
      audio.PlayOneShot(club);
      
	}
  }
  
   if(Input.GetKeyUp(KeyCode.P))
  { 
    putt = !putt;
    
    
  }

}


 