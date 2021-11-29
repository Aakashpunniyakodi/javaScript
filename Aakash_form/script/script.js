function validate() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].style.border = "red solid 1px";
            
        }
        else {
            inputs[i].style.border = " khaki solid 2px";

        }
    }
    var regxname=/^[a-zA-Z]+$/;
    var regxmail = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9_]).([a-zA-Z]){2,20}.([a-zA-Z]){2,20}$/;
    var regxdob = /^([0-3])([0-9])-([0-1])([0-9])-([0-2])([0-9]){3}$/;
    var regxmobile = /^([6-9])([0-9]){9}$/;
    var regxpincode = /^6([0-9]){5}$/;
    var namex = document.getElementById("name");
    var mail = document.getElementById("email");
    var dob = document.getElementById("dateofbirth");
    var mobile = document.getElementById("phone");
    var pincode = document.getElementById("currentPinCode");
    if (regxname.test(namex.value.trim())) {
        mail.style.border = "green solid 1px";
        document.getElementById("lname").style.visibility="hidden";
    }
    else {
        mail.style.border = "red solid 1px";
        document.getElementById("name").style.visibility="visible";
    }

    if (regxmail.test(mail.value.trim())) {
        mail.style.border = "green solid 1px";
        document.getElementById("lmail").style.visibility="hidden";
    }
    else {
        mail.style.border = "red solid 1px";
        document.getElementById("lmail").style.visibility="visible";
    }
    if (regxdob.test(dob.value.trim())) {
        dob.style.border = "green solid 1px";
        document.getElementById("ldob").style.visibility="hidden";
    }
    else {
        dob.style.border = "red solid 1px";
        document.getElementById("ldob").style.visibility="visible";
    }
    if (regxmobile.test(mobile.value.trim())) {
        mobile.style.border = "green solid 1px";
        document.getElementById("lphone").style.visibility="hidden";
    }
    else {
        mobile.style.border = "red solid 1px";
        document.getElementById("lphone").style.visibility="visible";
    }
    if (regxpincode.test(pincode.value.trim())) {
        pincode.style.border = "green solid 1px";
        document.getElementById("lpincode").style.visibility="hidden";
    }
    else {
        pincode.style.border = "red solid 1px";
        document.getElementById("lpincode").style.visibility="visible";

    }
}
function copyAddress() {
    addressLine1 = document.getElementById("currentAddressLine1").value;
    addressLine2 = document.getElementById("currentAddressLine2").value;
    city = document.getElementById("currentCity").value;
    state = document.getElementById("currentState");
    pinCode = document.getElementById("currentPinCode").value;

    document.getElementById("permanantAddressLine1").value = addressLine1;
    document.getElementById("permanantAddressLine2").value = addressLine2;
    document.getElementById("permanantCity").value = city;
    document.getElementById("permanantState").value = state.options[state.selectedIndex].value;
    document.getElementById("permanantPinCode").value = pinCode;
}