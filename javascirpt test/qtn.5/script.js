function generateCard(){
    let name = document.getElementById('name').value;
    let mobilenumber = document.getElementById('number').value;
    let emailid =  document.getElementById('email').value;

    document.getElementById('cardName').innerText = name;
    document.getElementById('mobileNumber').innerText = mobilenumber;
    document.getElementById('emailId').innerText = emailid;
    document.getElementById('card').style.display = 'block';


}