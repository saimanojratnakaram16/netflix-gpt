export const checkSignInValidation = (email,password) =>{
    const emailErr = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(email);
    const passwordErr = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);

    return {
        email: emailErr ? '' : 'Please enter a valid email or phone number.',
        password: passwordErr ? '' : 'Please enter a valid password.',
      };

}

export const checkSignUpValidation = (name,email,password) =>{
    const nameErr = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    return {
        name: nameErr ? '' : 'Please enter a valid Full Name.',
        ...checkSignInValidation(email, password),
      };
};