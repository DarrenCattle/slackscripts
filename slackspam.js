//spam infinite amount of times at a delay
var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
var msgbox = $('#message-input')[0];
var delay = 1000;

function spammer() {
	msgbox.value = "pay me";
	$('#message-form').submit();
	setTimeout(kush,delay);
}
spammer();

//check time and post if time matches 4:20
var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
var a = 0;
var msgbox = $('#message-input')[0];
var done = false;

function kush() {
	var d = new Date();
	var hour = d.getHours();
	var minute = d.getMinutes();
	var seconds = d.getSeconds();
	var hh = 4;
	var mm = 20;
	var ss = 5;
	var four = minute==mm && (hour==hh || hour==16) && seconds <= ss && !done;
	console.log(hour, minute, seconds, four);
	if(four)
	{
		done = true;
		kushcommands();
		setTimeout(kush,40000000); //4,310,000,000 would be more ideal
	}
	else
	{
		setTimeout(kush,1000);
	}
}

function kushcommands() {
	var commands = ["ridbot echo pay me", "ridbot echo molly pay d 1", "pay me"];
	if(a>=commands.length) {
		a=0;
		console.log("done");
	}
	else {
		console.log("else: " + a);
		msgbox.value = commands[a];
		$('#message-form').submit();
		a++;
		setTimeout(kushcommands,1000);
	}
}
kush();

var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
var a = 0;
var msgbox = $('#message-input')[0];

function kushcommands() {
	var commands = ["pay me", "ridbot echo pay me", "ridbot echo molly pay d 1"];
	if(a>=commands.length) {
		a=0;
		console.log("done");
	}
	else {
		console.log("else: " + a);
		msgbox.value = commands[a];
		$('#message-form').submit();
		a++;
		setTimeout(kushcommands,1000);
	}
}
kushcommands();