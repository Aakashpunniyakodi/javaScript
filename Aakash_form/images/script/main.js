var UserIdAutoIncrement = 1000;
var user = /** @class */ (function () {
    function user(aUserName, aUserAge, aUserMnumber) {
        UserIdAutoIncrement++;
        this.UserId = UserIdAutoIncrement.toString();
        this.UserName = aUserName;
        this.UserAge = aUserAge;
        this.UserMnum = aUserMnumber;
    }
    return user;
}());
var course = /** @class */ (function () {
    function course(acoursename, acourseid, arequireddays) {
        {
            this.CourseName = acoursename;
            this.CourseId = acourseid;
            this.RequiredDays = arequireddays;
        }
    }
    return course;
}());
function newuser() {
    document.getElementById("newuser").style.visibility = "visible";
    document.getElementById("first").style.visibility = "hidden";
}
function existinguser() {
    document.getElementById("existinguser").style.visibility = "visible";
    document.getElementById("first").style.visibility = "hidden";
}
function adduser() {
    document.getElementById("adduser").style.visibility = "visible";
    document.getElementById("first").style.visibility = "hidden";
}
function login() {
    document.getElementById("userhome").style.visibility = "visible";
    document.getElementById("existinguser").style.visibility = "hidden";
}
function availablecourses() {
    document.getElementById("availablecourses").style.visibility = "visible";
    document.getElementById("userhome").style.visibility = "hidden";
}
function enrolledcourse() {
    document.getElementById("enrolledcourse").style.visibility = "visible";
    document.getElementById("availablecourses").style.visibility = "hidden";
}
function showhistory() {
}
