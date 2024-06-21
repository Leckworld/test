const bUrl = "https://blynk.cloud/external/api/";
var apikey = ""
var apiGet = bUrl +"get?token="+apikey+"&";
var apiUpdate = bUrl +"update?token="+apikey+"&"
var dev =""
const PORT0 = "v0";
const PORT1 = "v1";
const PORT2 = "v2";
const PORT3 = "v3";
const PORT4 = "v4";
const PORT5 = "v5";
const PORT6 = "v6";

function toggleButton(light) {
    var pinValue0 = light.checked ? 0 : 1;
    var url0 = apiUpdate + PORT0 +"="+ pinValue0;
    var request = new XMLHttpRequest();
    request.open("GET", url0);
    request.send();

};
// f_light swicth function

function toggleButton1(f_light) {
  var pinValue1 = f_light.checked ? 0 : 1;
  var url1 = apiUpdate + PORT1 +"="+ pinValue1;
  var request = new XMLHttpRequest();
  request.open("GET", url1);
  request.send();
};

function toggleButton2(fan) {
  var pinValue2 = fan.checked ? 0 : 1;
  var url2 = apiUpdate + PORT2 +"="+ pinValue2;
  var request = new XMLHttpRequest();
  request.open("GET", url2);
  request.send();

};

function toggleButton3(extra) {
  var pinValue3 = extra.checked ? 0 : 1;
  var url3 = apiUpdate + PORT3 +"="+ pinValue3;
  var request = new XMLHttpRequest();
  request.open("GET", url3);
  request.send();
};


async function getApiResponse() {
update()
const response0 = await fetch(apiGet+PORT0);
const data0 = await response0.json();

const response1 = await fetch(apiGet+PORT1);
const data1 = await response1.json();

const response2 = await fetch(apiGet+PORT2);
const data2 = await response2.json();

const response3 = await fetch(apiGet+PORT3);
const data3 = await response3.json();

const response4 = await fetch(apiGet+PORT4);
const data4 = await response4.json();

// Update the page with the response data
if (data0 == 1)
  {
    // document.getElementById("response-container").innerHTML = "OFF"
    document.getElementById("light");
    light.checked = false;
  };
if (data0 == 0)
  {
    // document.getElementById("response-container").innerHTML = "ON"
    document.getElementById("light");
    light.checked = true;
  };

  if (data1 == 1)
  {
    // document.getElementById("response-container").innerHTML = "OFF"
    document.getElementById("light");
    f_light.checked = false;
  };
if (data1 == 0)
  {
    // document.getElementById("response-container").innerHTML = "ON"
    document.getElementById("light");
    f_light.checked = true;
  };
//document.getElementById("response-container").innerHTML = JSON.stringify(data);

if (data2 == 1)
  {
    // document.getElementById("response-container").innerHTML = "OFF"
    document.getElementById("light");
    fan.checked = false;
  };
if (data2 == 0)
  {
    // document.getElementById("response-container").innerHTML = "ON"
    document.getElementById("light");
    fan.checked = true;
  };

if (data3 == 1)
  {
    // document.getElementById("response-container").innerHTML = "OFF"
    document.getElementById("light");
    extra.checked = false;
  };
if (data3 == 0)
  {
    // document.getElementById("response-container").innerHTML = "ON"
    document.getElementById("light");
    extra.checked = true;
  };

if (data4 == 0)
  {
    document.getElementById("stat").innerHTML = "Device is _OFFLINE_"
  };
if (data4 == 1)
  {
    document.getElementById("stat").innerHTML = "Device is _ONLINE_"
  };
document.getElementById("device1").innerHTML = data.device_1.dstats;
document.getElementById("device2").innerHTML = data.device_2.dstats;
document.getElementById("device3").innerHTML = data.device_3.dstats;
document.getElementById("device4").innerHTML = data.device_4.dstats;
document.getElementById("device5").innerHTML = data.device_5.dstats;
}
function deviceSelect(dev){
  window.dev=dev;
  update();

}
function update(){
    window.user = firebase.auth().currentUser;
    window.database = firebase.database();
    window.dname =user.displayName
    window.email =user.email
    window.uname = email.split('@')[0].replace(/\./g, '');
    window.mnumber =user.phoneNumber
    window.uid =user.uid

    var user_ref = database.ref('users/' + uname)
    user_ref.on('value', function(snapshot) {
      window.data = snapshot.val()
      window.apikey = data.device[dev];
      window.apiGet = bUrl +"get?token="+apikey+"&";
      window.apiUpdate = bUrl +"update?token="+apikey+"&"
      if(data[dev].dstats == "NA"||data[dev].dstats == "Na"||data[dev].dstats == "na"||data[dev].dstats == ""){
        document.getElementById("device").innerHTML ="Device not configured pls contact to leckworld!";
        document.getElementById("stat").innerHTML = "Device is not exist bay a Device!!!"
        document.getElementById("pin1").innerText = "____/      /____Light";
        document.getElementById("pin2").innerHTML = "____/      /____Foot_light";
        document.getElementById("pin3").innerHTML = "____/      /____Fan";
        document.getElementById("pin4").innerHTML = "____/      /____Extra";
      }else{
          document.getElementById("device").innerHTML ="Welcome to "+data[dev].dstats;+" dashboard";
          document.getElementById("pin1").innerText = "____/Connected/____"+data[dev].pin_1;
          document.getElementById("pin2").innerHTML = "____/Connected/____"+data[dev].pin_2;
          document.getElementById("pin3").innerHTML = "____/Connected/____"+data[dev].pin_3;
          document.getElementById("pin4").innerHTML = "____/Connected/____"+data[dev].pin_4;
        }

    })  
}

setInterval(getApiResponse, 500);

 // Call the function every second 1000 mili sec =  1s
