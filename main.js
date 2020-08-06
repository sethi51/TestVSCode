function sayHello(){ /*THIS CAN BE CALLED BASED ON THE EVENT*/
    // document.write("Hello js");
    // alert("HELLO");
    var uname = document.getElementById("username").value;
    var welcomeMessage = document.getElementById("welcomeMessage").innerHTML="Welcome "+uname;
    // document.write("Hello "+uname); //not prefered
    // alert("Hello "+uname); //not prefered
}

function validate(){
    var mobile = document.getElementById("mobile").value;
    if(isNaN(mobile))  //if mobile number is not a number
    {
        document.getElementById("mbError").innerHTML="Invalid Phone Number";
        alert("Wrong");
        event.preventDefault();
    }
}

function validate1(){
    var mobile = document.getElementById("mobile").value;
    if(isNaN(event.key))  //if mobile number is not a number
    {
        // document.getElementById("mbError").innerHTML="Invalid Phone Number";
        // alert("Wrong");
        event.preventDefault();
    }
}