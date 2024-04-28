var registrationName = document.getElementById("registrationName");
var registrationSurbame = document.getElementById("registrationSurame");
var registrationDateOfBirth = document.getElementById("registrationDateOfBirth");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var signupParagrapher = document.getElementById("registrationParagrapher");

function registrationVisualize()
{
    if (document.getElementById("registrationNameContainer").classList.contains("visually-hidden"))
    {
        document.getElementById("registrationNameContainer").classList.remove("visually-hidden");
        document.getElementById("registrationSurnameContainer").classList.remove("visually-hidden");
        document.getElementById("registrationDateOfBirthContainer").classList.remove("visually-hidden");
        signupParagrapher.innerHTML = "<a href='#!' onclick='registrationVisualize()' class='link-danger' style='padding-bottom: 50px;'>Already registered?</a>";
    }
    else
    {
        document.getElementById("registrationNameContainer").classList.add("visually-hidden");
        document.getElementById("registrationSurnameContainer").classList.add("visually-hidden");
        document.getElementById("registrationDateOfBirthContainer").classList.add("visually-hidden");
        signupParagrapher.innerHTML = "Don't have an account ? <a href='#!' onclick='registrationVisualize()' class='link-danger'>Register</a>";
    }
}

function fade()
{
    console.log("ciao");
}

