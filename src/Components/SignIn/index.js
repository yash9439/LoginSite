import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Fragment, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const data = window.localStorage.getItem('userInfo');
        if (data) setUserInfo(JSON.parse(data));
      }, [userInfo]);

    const [SignIn_Email, set_SignIn_Email] = useState("");
    const [SignIn_Password, set_SignIn_Password] = useState("");

    const handleChange_SignIn_Email = e => {
        console.log(`SignIn_Email-Typed => ${e.target.value}`);
        set_SignIn_Email(e.target.value);
    }
    const handleChange_SignIn_Password = e => {
        console.log(`Password-Typed => ${e.target.value}`);
        set_SignIn_Password(e.target.value);
    }

    const HandleClick_SignIn = () => {
        if(SignIn_Email==='' || SignIn_Password==='') {
            alert("Error, Fill all the required Fields!!")
        }
        else {
            if(SignIn_Email === "admin" && SignIn_Password === "admin") {
                window.localStorage.setItem("isLoggedIn",JSON.stringify(true));
                const user = {
                    FirstName: "Admin_Firstname", LastName: "Admin_Lastname", Email: "Admin@gmail.com", Age: "32", ContactNumber: "1234567890", Username: "Admin", Password: "Admin"
                }
                window.localStorage.setItem("loggedInUser",JSON.stringify(user));
                console.log(JSON.parse(window.localStorage.getItem("isLoggedIn")) === true);
                alert("Login Successful");
                navigate("/userDetails");
            }
            else {
            const data = window.localStorage.getItem("userInfo");
            console.log(data);
            if (data) setUserInfo(JSON.parse(data));
            const user = userInfo.find(mail => mail.Email === SignIn_Email);
            if(user) {
                if(user.Password === SignIn_Password) {
                    alert("Login Successful");
                    window.localStorage.setItem("isLoggedIn",JSON.stringify(true));
                    window.localStorage.setItem("loggedInUser",JSON.stringify(user));
                    navigate("/userDetails");
                }   
                else {
                    alert("Invalid Password");
                }
            }
            else {
                alert("User Not Found");
            }
        }
        }
    }

    return <Fragment>
        <h1 >Sign In</h1>
        <div> 
        <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                <TextField id="registrationUser_SignIn_Email" label="*Email ID" value={SignIn_Email} onChange={handleChange_SignIn_Email} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                <TextField id="registrationUser_Password" label="*Password" value={SignIn_Password} onChange={handleChange_SignIn_Password} />
            </Box>
            <Button as="input" onClick={HandleClick_SignIn} type="submit" value = "Sign In" />
        </div>
    </Fragment>

}

export default SignIn;