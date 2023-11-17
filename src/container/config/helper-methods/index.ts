export const  Validate_Email =  (email:any) =>{
    return String(email).toLocaleLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}
export const Validate_Password = (password:any) =>{
    console.log('password',password);
    
//    return ( /[A-Z]/.test(password) )
}