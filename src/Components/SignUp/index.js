import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Fragment, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useState, navigate} from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState([]);
    const data = window.localStorage.getItem('userInfo');

    useEffect(() => {
        // const data = window.localStorage.getItem('userInfo');
        if (data) setUserInfo(JSON.parse(data));
      }, []);
    
    
    const [SignUp_Username, set_SignUp_Username] = useState("");
    const [SignUp_Password, set_SignUp_Password] = useState("");
    const [SignUp_FirstName, set_SignUp_FirstName] = useState("");
    const [SignUp_LastName, set_SignUp_LastName] = useState("");
    const [SignUp_Email, set_SignUp_Email] = useState("");
    const [SignUp_Age, set_SignUp_Age] = useState("");
    const [SignUp_ContactNumber, set_SignUp_ContactNumber] = useState("");
    
    const handleChange_SignUp_Username = e => {
        console.log(`UserName-Typed => ${e.target.value}`);
        set_SignUp_Username(e.target.value);
    }
    const handleChange_SignUp_Password = e => {
        console.log(`Password-Typed => ${e.target.value}`);
        set_SignUp_Password(e.target.value);
    }
    const handleChange_SignUp_FirstName = e => {
        console.log(`FirstName-Typed => ${e.target.value}`);
        set_SignUp_FirstName(e.target.value);
    }
    const handleChange_SignUp_LastName = e => {
        console.log(`LastName-Typed => ${e.target.value}`);
        set_SignUp_LastName(e.target.value);
    }
    const handleChange_SignUp_Email = e => {
        console.log(`Email-Typed => ${e.target.value}`);
        set_SignUp_Email(e.target.value);
    }
    const handleChange_SignUp_Age = e => {
        console.log(`Age-Typed => ${e.target.value}`);
        set_SignUp_Age(e.target.value);
    }
    const handleChange_SignUp_ContactNumber = e => {
        console.log(`ContactNumber-Typed => ${e.target.value}`);
        set_SignUp_ContactNumber(e.target.value);
    }

    const HandleClick_SignUp = () => {

        if(SignUp_FirstName==='' || SignUp_LastName==='' || SignUp_Email==='' || SignUp_Age==='' || SignUp_ContactNumber==='' || SignUp_Username==='' || SignUp_Password==='') {
            alert("Error, Fill all the required Fields!!");
        }
        else {
            const user = userInfo.find(usr => usr.Email === SignUp_Email);
            if(user !== undefined) {
                alert("User with that Email Id already Exist");
                console.log(user.Email, SignUp_Email);
            }
            else {
                const FirstName = SignUp_FirstName;
                const LastName = SignUp_LastName;
                const Email = SignUp_Email;
                const Age = SignUp_Age;
                const ContactNumber = SignUp_ContactNumber;
                const Username = SignUp_Username;
                const Password = SignUp_Password;
                const newUser = {FirstName, LastName, Email, Age, ContactNumber, Username, Password};
                setUserInfo([...userInfo,newUser])
                alert("Account Created Successfully")
                window.localStorage.setItem("isLoggedIn",JSON.stringify(true));
                window.localStorage.setItem("loggedInUser",JSON.stringify(newUser));
            }
        }
    }
    useEffect(() => {
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
      }, [userInfo]);  

    const HandleClick_SignUp_Profile = () => {
        navigate("/userDetails");
    }

    return <Fragment>
        <h1>Sign Up</h1>
        <div> 
            <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                <TextField id="registrationUser_FirstName" label="*First Name" value={SignUp_FirstName} onChange={handleChange_SignUp_FirstName} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                <TextField id="registrationUser_LastName" label="*Last Name" value={SignUp_LastName} onChange={handleChange_SignUp_LastName} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                <TextField id="registrationUser_Email" label="*Email" value={SignUp_Email} onChange={handleChange_SignUp_Email} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                <TextField id="registrationUser_Age" label="*Age" value={SignUp_Age} onChange={handleChange_SignUp_Age} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                <TextField id="registrationUser_ContactNumber" label="*Contact Number" value={SignUp_ContactNumber} onChange={handleChange_SignUp_ContactNumber} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                <TextField id="registrationUser_Username" label="*Username" value={SignUp_Username} onChange={handleChange_SignUp_Username} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                <TextField id="registrationUser_Password" label="*Password" value={SignUp_Password} onChange={handleChange_SignUp_Password} />
            </Box>
            <Button as="input" onClick={HandleClick_SignUp} type="submit" value = "Sign Up" />
            <p> </p>
            <Button as="input" onClick={HandleClick_SignUp_Profile} type="submit" value = "Open Profile" />
        </div>
    </Fragment>

}

export default SignUp;