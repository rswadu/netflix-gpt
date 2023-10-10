export const validata=(email,password)=>{
        const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/.test(password);
        const isValidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(email);
        if(! isValidEmail){
            return "email is not valid"
        }
        if(!isValidPassword){
            return "password is not valid"
        }   
        return null;
    } 
