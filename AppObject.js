function App(n,m,s){
    //Declare your instance variables here.
    this.name = n;
    this.memory = m;
    this.state = s;
    //Declare the instance function open here.
    this.open = function(){
      this.state = "active";
    };
    //Declare the instance function sleep here.
    this.sleep = function(){
      if(this.state == "active"){
        this.state = "sleep";
        this.memory = this.memory/2;
      }
    };
    //Declare the instance function active here.
    this.active = function(){
      if(this.state == "sleep"){
        this.state = "active";
        this.memory = this.memory*2;
      }
    };
    //Declare the instance function close here.
    this.close = function(){
      if(this.state != null){
        this.state = null;
        this.memory = 0;
      }
    };
}
//Use the constructor to create 4 App objects below.
var Mazzapp = new App ("Mazz", 30, "active" );
var Rosenapp = new App ("Rosey", 50, "sleep");
var Flemapp = new App ("Flemdog", 40,"active");
var Klinapp = new App ("Kliner", 100, "sleep");
//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
var appList = [Mazzapp, Rosenapp, Flemapp, Klinapp];
