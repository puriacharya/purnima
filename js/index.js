var checkStatus = function(){
if(navigator.onLine){
	alert("hey u r online")
  document.body.innerHTML = " Hey purnima u r online"
}
else
{
	alert("sorry u r offline")
  document.body.innerHTML = " Oops purnima u r offline"
  
}
}
checkStatus()
window.addEventListener("online",function() {
})
window.addEventListener("offline",function() {
checkStatus()
})

