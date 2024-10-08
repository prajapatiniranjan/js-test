function validatePassword(){
    let password = document.querySelector('#password').value;
    if(password.length < 8)
    {
        alert("Password should be have 8 character");
        return false;
    }

    if(!/[A-Z]/.test(password))
    {
        alert("Password should have one upercase chctr");
        return false;
    }

    if(!/[a-z]/.test(password))
    {
        alert("PAssword should have at least one lower case");
        return false;
    }
    if(!/\d/.test(password))
        alert("Password should have at least one digit");
    return false;

    if(!/[@#$%&*?]/.test(password))
    {
        alert("password should have at least one speacial char");
        return false;
    }

    return true;
}