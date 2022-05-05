import React, { useState } from "react";

export default function RegisterForm(){
    // set dữ liệu 
    const [Firstname, setFirstName] = useState();
    const [Lastname, setLastName] = useState();
    const [Gender, setGender] = useState();
    const [Age, setAge] = useState();
    const [Address, setAddress] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const [Confirm, setConfirm] = useState();
    
    // lấy giá trị đăng kí
    const changeFirstname = (event) => {
        setFirstName(event.target.value);
    }

    const changeLastname = (event) => {
        setLastName(event.target.value);
    }

    const changeGender = (event) => {
        setGender(event.target.value);
    }

    const changeAge = (event) => {
        setAge(event.target.value);
    }

    const changeAddress = (event) => {
        setAddress(event.target.value);
    }
     
    const changeEmail = (event) => {
       setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const changeConfirm = (event) => {
        setConfirm(event.target.value);
    }


    // xét điều kiện
    const handleRegister = (event) => {

        event.preventDefault();

        if ( !Email || !Password || !Firstname || !Lastname || !Confirm) {

            alert ("Nhập đầy đủ những thông tin có dấu * ");

        } else if (Password.length < 6) {

            alert("Password phải có hơn 6 kí tự")

        } else if (Confirm != Password) {

            alert("Vui lòng nhập lại confirm")
        
        } else if (Age === "0") {
            
            alert("Vui lòng nhập Age lớn hơn 0")
        
        } else {
            let person = {
                Fullname: Firstname + " " + Lastname + " ", 
                gender: Gender + " ",
                age: Age + " ",
                address: Address + " ",
                email: Email + " ",
            }

            let result = JSON.stringify(person)
            alert ("Đăng kí thành công với thông tin " + result);
        }
    };


    return (
        <form onSubmit={handleRegister}> 
            <h2> Register Form </h2>

            <div> Firstname*: <input type="text" placeholder = "First Name*" onChange={changeFirstname}/></div>

            <div> Lastname*: <input type="text" placeholder = "Last Name*" onChange={changeLastname}/></div>

            <div> Gender: <input type="text" placeholder = "Gender" onChange={changeGender}/></div>

            <div> Age: <input type="text" placeholder = "Age" onChange={changeAge}/></div>

            <div> Address: <input type="text" placeholder = "Address" onChange={changeAddress}/></div>

            <div> Email*: <input type="text" placeholder = "Email*" onChange={changeEmail}/></div>

            <div> Password*: <input type="password" placeholder = "Password*" onChange={changePassword}/></div>

            <div> Confirm Password*: <input type="password" placeholder = "Confirm Password*" onChange={changeConfirm}/></div>

            <button> Register </button>
        </form>
    )
}