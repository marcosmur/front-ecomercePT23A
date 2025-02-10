import { IloginErrors, IloginProps, IRegisterErrors, IRegisterProps } from "@/types";

export function  validateLoginForm (values:IloginProps){
    const errors:IloginErrors={}

if (values.email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
    errors.email="email is not valid"
    }
    return errors
};

export function  validateRegisterForm (values:IRegisterProps){
    const errors:IRegisterErrors={}

if (values.email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
    errors.email="email is not valid"
    }
    return errors
};

