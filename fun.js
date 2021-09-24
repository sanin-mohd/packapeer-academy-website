
let names=document.getElementById("name")
let place=document.getElementById("place")
let gender=document.getElementById("gender")
let email=document.getElementById("emaill")
let contact=document.getElementById("number")
let statuss=document.getElementById("status")
let education=document.getElementById("education")
let college=document.getElementById("college")
let year=document.getElementById("year")
let agree=document.getElementById("agreecheck")


function validate(){
    if(names.value=="" ){
        document.getElementById("s-names").innerHTML="This field is required"
        
    }else{
        
            document.getElementById("s-names").innerHTML=""
            
        
    }
    if(place.value=="" ){
        document.getElementById("s-place").innerHTML="This field is required"
        
    }else{
        
            document.getElementById("s-place").innerHTML=""
            
       
    }
     if(gender.value=="gender" ){
        document.getElementById("s-gender").innerHTML="This field is required"
        
    }else{
        
            document.getElementById("s-gender").innerHTML=""
            
    }
    if(email.value=="" ){
        document.getElementById("s-email").innerHTML="This field is required"
        
    }else{
        
            document.getElementById("s-email").innerHTML=""
            
    }
    if(number.value.length!=10 ){
        document.getElementById("s-number").innerHTML="Number must be 10 digit"
        
    }else{
        
            document.getElementById("s-number").innerHTML=""
            
    }
    if(statuss.value=="status" ){
        document.getElementById("s-status").innerHTML="This field is required"
        
    }else{
        
            document.getElementById("s-status").innerHTML=""
            
    }
    if(education.value=="education" ){
        document.getElementById("s-education").innerHTML="This field is required"
        
    }else{
        
            document.getElementById("s-education").innerHTML=""
            
    }
    if(college.value=="" ){
        document.getElementById("s-college").innerHTML="This field is required"
        
    }else{
        
            document.getElementById("s-college").innerHTML=""
            
    }
    if(year.value=="0" ){
        document.getElementById("s-year").innerHTML="This field is required"
        
    }else{
        
            document.getElementById("s-year").innerHTML=""
            
    }  if(!agree.checked){
        document.getElementById("s-agree").innerHTML="You need to agree for registration"
        
    }else{
        
            document.getElementById("s-agree").innerHTML=""
            
    }
    
    
    if(names.value=="" ||place.value==""||gender.value=="gender"||email.value==""||statuss.value=="status"||number.value.length!=10 ||education.value=="education" ||college.value=="" ||year.value=="0"||!agree.checked){
        return false
    }
    
}
