let valid=()=>{

    let name=document.querySelector("#inpname").value;
    let number=document.querySelector("#inpnum").value;
    let email=document.querySelector("#inpemail").value;
 let pass=document.querySelector("#inppass").value;
  let cpass=document.querySelector("#inpcpass").value;


    let errname=document.querySelector("#errname")
    let errnumber=document.querySelector("#errnum")
    let erremail=document.querySelector("#erremail")
 let errpass=document.querySelector("#errpass")
  let errcpass=document.querySelector("#errcpass")


    if(name==""){

errname.innerHTML="Please Enter Your Name"
errname.style.color="red"
return false;


    }

    else if(number.length!=10){

        errnumber.innerHTML="Enter 10 digit number "
        errnumber.style.color="red"
        return false;
    }

    else if(isNaN(number)){

        errnumber.innerHTML="Enter number only"
        errnumber.style.color="red"
        return false;
    }
    else if(email==""){

        erremail.innerHTML="Please Enter Your Email"
        erremail.style.color="red"
        return false;
    }
    else if(pass==""){

        errpass.innerHTML="Please Enter Your Password"
        errpass.style.color="red"
        return false;
    }





}