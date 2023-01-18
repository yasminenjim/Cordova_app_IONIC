//---------------------------------------------------------------------

//def our service
var urat_service={
	service_UUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
	notif_charac:'6e400002-b5a3-f393-e0a9-e50e24dcca9e',
	write_charac:'6e400003-b5a3-f393-e0a9-e50e24dcca9e'
};


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------




/* var app = {
    // Application Constructor
    initialize: function() {
		this.bindEvents();
        this.showMainPage();
    },
	
bindEvents: function(){
	 document.addEventListener('deviceready', this.onDeviceReady, false);
	 deviceList.addEventListener('click', this.connect, false);
	 refreshButton.addEventListener('click',this.refreshDeviceList,false);
	 onButton.addEventListener('click', this.switchOn,false);
	 offButton.addEventListener('click',this.switchOff,false);
	 disconnectButton.addEventListener('click',this.disconnect,false);
	 
},

OnDeviceReady: function (){
	app.refreshDeviceList();
},

refreshDeviceList: function(){
    
    deviceList.innerHTML=''; //empty the list
    bluetoothle.scan([],10,app.onDiscoverDevice,app.onError);
	refreshButton.Hidden=true;
	scanStatusDiv.innerHTML="Scanning...";
     setTimeout(function() {
            refreshButton.hidden = false;
            scanStatusDiv.innerHTML = "";
        },10000);

},

    onDiscoverDevice: function(device){
		
	var notification=app.parseNotif(device);
    var listItem = document.querySelector('[data-device-id="' + device.id + '"]');
        if (!listItem) { // need to create list item
            listItem = document.createElement('li');
            deviceList.appendChild(listItem);
        }
        listItem.innerHTML = device.name + '<br/>' +
            device.id + '<br/>' +
            'RSSI: ' + device.rssi +
            notification;
        listItem.dataset.deviceId = device.id;
    } */





var app = {
    // Application Constructor
    initialize: function() {
        console.log("screen " + screen.width + "x" + screen.height);
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    
    },
    // deviceready Event Handler
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
onDeviceReady: function() {
        this.receivedEvent('deviceready');
  // //-----------------------------------------------------------------------------
  mylog("starting...");	    

   
  //start from app.js	
  onappstart();

//-----------

},

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
    }

};

app.initialize();
//-----------------------------------------------------------------------------
function mylog(txt, clear) {
    if (!b_log) return;
    var d=document.getElementById("mylog");
    if (!d) return;
    if (clear) d.innerHTML = "";
    d.innerHTML += txt + "<BR>";
}
//-----------------------------------------------------------------------------
function tactile(){
//console.log("tacile "+cordova.platformId); 	
	     if (cordova.platformId.indexOf("ios")==0) {
		      if (window.TapticEngine)  TapticEngine.unofficial.weakBoom();
		                      }
	     if (cordova.platformId.indexOf("android")==0){
	    navigator.vibrate(60);
		  }
}

	


app.initialize();