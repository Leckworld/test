document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

 function signUp(){
     const email = document.getElementById("email").value
     const password = document.getElementById("password").value
     const device_id  = document.getElementById("Device_Code").value
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .catch((error) => {
         document.getElementById("error").innerHTML = error.message
     });
     database.ref('users/'+ email).set({
        email:email,
        password : password,
        device_id : device_id
     })
     alert(email+" account is created")


 }

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}
