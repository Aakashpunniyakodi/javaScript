let UserIdAutoIncrement = 1000;
class user
{
    UserId: string;
    UserName: string;
    UserAge: number;
    UserMnum: number;

    constructor(aUserName: string, aUserAge: number, aUserMnumber: number) {

        UserIdAutoIncrement++;

        this.UserId =  UserIdAutoIncrement.toString();

        this.UserName = aUserName;
        this.UserAge = aUserAge;
        this.UserMnum = aUserMnumber;
    }

}
class course
{
    CourseName:string;
    CourseId:String;
    RequiredDays:string;

    constructor(acoursename:string,acourseid:string,arequireddays:string)
    {
        {
            this.CourseName= acoursename;
            this.CourseId=acourseid;
            this.RequiredDays=arequireddays;
        }
    }

}
function newuser()
{
    (document.getElementById("newuser") as HTMLElement).style.visibility = "visible";
    (document.getElementById("first") as HTMLElement).style.visibility = "hidden";

}
function existinguser()
{
    (document.getElementById("existinguser") as HTMLElement).style.visibility = "visible";
    (document.getElementById("first") as HTMLElement).style.visibility = "hidden";

}
function adduser()
{ 
    (document.getElementById("adduser") as HTMLElement).style.visibility = "visible";
    (document.getElementById("first") as HTMLElement).style.visibility = "hidden";

}
function login()
{
    (document.getElementById("userhome") as HTMLElement).style.visibility = "visible";
    (document.getElementById("existinguser") as HTMLElement).style.visibility = "hidden";
}
function availablecourses()
{
    (document.getElementById("availablecourses") as HTMLElement).style.visibility = "visible";
    (document.getElementById("userhome") as HTMLElement).style.visibility = "hidden";

}
function enrolledcourse()
{
    (document.getElementById("enrolledcourse") as HTMLElement).style.visibility = "visible";
    (document.getElementById("availablecourses") as HTMLElement).style.visibility = "hidden";

}
function showhistory()
{

}