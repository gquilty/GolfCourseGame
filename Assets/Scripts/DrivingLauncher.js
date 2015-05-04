#pragma strict
public var projectile:GameObject;
public var timeCount : float;
public var seconds : double;
public var guitexture : GUITexture;
public var zeroTexture: Texture;
public var quaterTexture: Texture;
public var halfTexture: Texture;
public var tquaterTexture: Texture;
public var fullTexture: Texture;
public var driveSpeed;
public var shots:int ;
public var score: int ;




function Start ()
{
  seconds = 0;
  shots= 0;
  score = 0;
  
}

function Update ()
{
    GameObject.Find("Score").guiText.text = " Score: " + score ;
  	timeCount = timeCount + (Time.deltaTime);
    seconds = timeCount;
  	
  	
  	if(timeCount >= 0.0 && timeCount <= 0.2)
  	{
  	 guitexture.texture = zeroTexture;
  	 
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*20;
  	}
  	
  	if(timeCount >= 0.3 && timeCount <= 0.5)
  	{
  	 guitexture.texture = quaterTexture;
  	
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*30;
  	}
  	
  	if(timeCount >= 0.6 && timeCount <= 0.8)
  	{
  	 guitexture.texture = halfTexture;
  	
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*50;
  	}
  	
  	if(timeCount >= 0.9 && timeCount <= 1)
  	{
  	 guitexture.texture = tquaterTexture;
  	 
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*75;
  	}
  	
  	if(timeCount >= 1.1 && timeCount <= 1.3)
  	{
  	 guitexture.texture = fullTexture;
  	
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*100;
  	}
  	
  	
  	if(timeCount >= 1.4 && timeCount <= 1.6)
  	{
  	 guitexture.texture = tquaterTexture;
  	 
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*75;
  	}
  	
  	if(timeCount >= 1.6 && timeCount <= 1.8)
  	{
  	 guitexture.texture = halfTexture;
  	
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*50;
  	}
  	
  	if(timeCount >= 1.8 && timeCount <= 2.0)
  	{
  	 guitexture.texture = quaterTexture;
  	
  	 driveSpeed = GameObject.Find("First Person Controller").transform.forward*30;
  	}
  	
  	if(timeCount >= 2.0 && timeCount <= 2.2)
  	{
  	  timeCount = 0;
  	}
  	
  	
  	
  	
    GameObject.Find("Camera2").transform.LookAt(GameObject.Find("Ball").transform);
 
  if(Input.GetKeyUp(KeyCode.F) && GameObject.Find("Ball").rigidbody.velocity.magnitude <=0.1 )
  { 
    shots++;
    Debug.Log(shots);
  	var shootingDirection : Vector3;
      GameObject.Find("golfclub").animation.Play("Swing");
  	  GameObject.Find("Camera1").gameObject.camera.rect = Rect(0,0,0,0);
  	  GameObject.Find("Camera2").gameObject.camera.rect = Rect(0,0,1,1);
      shootingDirection = driveSpeed;  
      shootingDirection.y += 10;
      var b:GameObject = Instantiate(projectile, transform.position, transform.rotation);
      b.rigidbody.AddForce(shootingDirection, ForceMode.Impulse);

  }
  
  if (shots == 50)
  {
   Application.LoadLevel("EndScreen");;
  }
 }
  
  function increaseScore25()
  {
    score += 25 ;
   
  }
  
   function increaseScore50()
  {
    score += 50 ;
   
  }
  
   function increaseScore75()
  {
    score += 75 ;
  
  }
  
   function increaseScore100()
  {
     score += 100 ;
  
  }




 