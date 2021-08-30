//Adding function to add user

function add_user(){
    userName = document.getElementById('userName').value;
    email = document.getElementById('email').value;
    if(userName == '' || email == ''){
        if(userName == ''){
            document.getElementById('error').style.fontSize = '15px';
            document.getElementById('login_div').style.height = '450px';
        }
        if(email == ''){
            document.getElementById('error1').style.fontSize = '15px';
        }
    }
    else{
        localStorage.setItem('userName', userName);
        window.location = 'kwitter_room.html';
    }
}
