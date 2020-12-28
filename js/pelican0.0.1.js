function person(firstname, lastname, age, country) 
{
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
}
           
var demo = document.getElementById('demo');
var introText = document.getElementById('p1');
var avatars = document.getElementsByClassName('avatars');
var avata;
var avatarPro = document.getElementById('avatarPro');
var reply = document.getElementById('reply');
var chatbox = document.getElementById('chatbox');

function func()
{
    var fname = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var agee = document.getElementById('age').value;
    var countryy = document.getElementById('country').value;
            
    var person1 = new person(fname, lname, agee, countryy);
    var person1Serial = JSON.stringify(person1);
    sessionStorage.setItem("person1", person1Serial);
}
function func2()
{
    var person1DeSerial = JSON.parse(sessionStorage.getItem("person1"));
    introText.innerHTML = "Welcome " + person1DeSerial.firstname + " " + person1DeSerial.lastname + " to Pelican v0.0.1<br/>" + "We see you are " + person1DeSerial.age + " years old and from " + person1DeSerial.country; 
}
function hold()
{
    for(var i = 0; i < avatars.length; i++)
    {avatars[i].style.border = "none";}
}

function avatar1()
{
    hold()
    avatars[0].style.border = "2px solid red";
    avatars[0].style.borderRadius = "50%";
    avata = '<img width="190px" height="190px" src="../images/AvMale.png"/>';
    sessionStorage.setItem("avater",avata);
}
function avatar2()
{
    hold()
    avatars[1].style.border = "2px solid red";
    avatars[1].style.borderRadius = "50%";
    avata = '<img width="190px" height="190px" src="../images/AvFemale.png">';
    sessionStorage.setItem("avater",avata);
}
function avatar3()
{
    hold()
    avatars[2].style.border = "2px solid red";
    avatars[2].style.borderRadius = "50%";
    avata = '<img width="190px" height="190px" src="../images/AvUnisex.png"/>';
    sessionStorage.setItem("avater",avata);
}

function loaded()
{
    var avataSavedCalled = sessionStorage.getItem("avater");
    var person1DeSerial = JSON.parse(sessionStorage.getItem("person1"));
    var avaRandom = Math.floor(Math.random() * 1000);
    avatarPro.innerHTML = avataSavedCalled;
    reply.innerHTML = "Hi " + person1DeSerial.firstname + ", I'm Pelican" + avaRandom + ". How may I help you?" + "<br/><br/>1)Find something<br/>2)Ask a question<br/>3)...";
}
//function findSomething()
//{
//    reply.innerHTML = '<a href="https://www.google.com/'+chatbox+'">See Result</a>'
//}
var submitButton = document.getElementById('chatboxSubmit');
function replies()
{
    chatbox = chatbox.value;
//    function findSomething()
//    {
        if ((chatbox == "find something") || chatbox == 1 )
        {
            reply.innerHTML = "What would you like to find?";
            if(typeof chatbox == "string")
            reply.innerHTML = '<a href="https://www.google.com/'+chatbox+'">See Result</a>'
//            chatbox = undefined;
//            chatbox.delete();
        }
//        else{reply.innerHTML = "ERROR ONGOING";}
//        function findS(){
//        var chatbox2 = document.getElementById('chatbox');
//        chatbox2 = chatbox2.value.toLowerCase();
//        
//        if ( chatbox2 == "string")
//        {
//            reply.innerHTML = '<a href="https://www.google.com/'+chatbox2+'" target="_blank">See Result</a>';
//        }
//            }
//        submitButton.onclick = findS();
//    }
    
//    if ((chatbox == "ask a question") || chatbox == 2 )
//        {
//            reply.innerHTML = "What's your question?";
//            
//        }
//    findSomething();
}


