import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions";
import { useMediaQuery } from "react-responsive";
import TextField from '@material-ui/core/TextField';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Meta from "../../helpers/Meta";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/Grid';
import '../SignUp/SignUp.css'
import Navbar from "../navbar/Navbar"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading:{
      textAlign:"center"
  },
  formLabel:{
      marginLeft:'20px',
      fontSize:'20px',
      fontWeight:600,
      marginTop:'120px'


  },
  formBox:{
     marginLeft:'20px', 
     width:"80%"
    }
}));
toast.configure();
const SignUp = () => {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    const classes = useStyles();
    const getMode = () => {
        return JSON.parse(localStorage.getItem("mode")) || false;
    };
    const [dark, setmode] = useState(getMode());
    useEffect(() => {
        localStorage.setItem("mode", JSON.stringify(dark));
    }, [dark]);

    //CHECK WHETHER THE SCREEN IS SMALL OR NOT
    const isSmallScreen = useMediaQuery({
        query: "(max-width: 959.5px)"
    });
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const updateUser = (e) => {
        e.preventDefault();
        //dispatch
    
    };

    if (auth.authenticate) {
        return <Redirect to={"/"} />;
    }

    if (user.loading) {
        return <p>Loading...!</p>;
    }

    return (
        <div>
              <Navbar/>
        <div className={"main"} style={{marginTop:"50px"}}>
          
            <Meta title="SignUp ​🚪​👨​​👩🏻​| Kurakoo" />
            <Grid container spacing={1}>
            <Grid item xs={4}>
            <h2 className={classes.heading}>My Questions</h2>
          <Paper>
          <img src="https://previews.123rf.com/images/chrisdorney/chrisdorney1602/chrisdorney160200077/51658510-no-questions-asked-red-rubber-stamp-over-a-white-background-.jpg"
    style={{width:"100%", height:"480px", opacity:0.5}}
    />
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <h2 className={classes.heading}>My Answers</h2>
          <Paper>
    <img src="https://previews.123rf.com/images/lkeskinen/lkeskinen1707/lkeskinen170708972/82453980-no-answer-rubber-stamp.jpg"
    style={{width:"100%", height:"480px", opacity:0.5}}
    />
          </Paper>
        </Grid>
        <Grid item xs={4}>
            <h2 className={classes.heading}>Update Profile</h2>
          <Paper>
           
          <form className="form">
                        <div className="group">
                            <div className="col-1">
                                <label for="name" style={{marginLeft:'40px'}}>FirstName</label>
                            </div>
                            <div class="colm-2" style={{marginLeft:'-45px'}}>
                                <input
                                    type="text"
                                    placeholder="first name"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div className="group">
                            <div className="col-1">
                                <label for="name"  style={{marginLeft:'40px'}}>LastName</label>
                            </div>
                            <div className="colm-2" style={{marginLeft:'-45px'}}>
                                <input
                                    type="text"
                                    placeholder="last name"
                                    name="lasttName"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="group">
                            <div className="col-1">
                                <label for="email"  style={{marginLeft:'40px'}}>Email</label>
                            </div>
                            <div className="colm-2" style={{marginLeft:'-45px'}}>
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="group">
                            <div className="col-1">
                                <label for="password"  style={{marginLeft:'40px'}}>Password</label>
                            </div>
                            <div className="colm-2" style={{marginLeft:'-45px'}}>
                                <input
                                    name="password"
                                    placeholder="password"
                                    type={PasswordInputType}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                               
                            </div>
                        </div>
                       
                        <div className="group">
                            <div className="col-1">
                                <label for="password"  style={{marginLeft:'40px'}}>Password</label>
                            </div>
                            <div className="colm-2" style={{marginLeft:'-45px'}}>
                                <input
                                    name="password"
                                    placeholder="password"
                                    type={PasswordInputType}
                                    value={ConfirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    required
                                />
                                
                            </div>
                        </div>
                      
                        
                        
                        <input
                            type="submit"
                            className="submit"
                            value="Update"
                            onClick={updateUser}
                        />
                        <br />
                       
                    </form>
        

       </Paper>

        </Grid>
               
            </Grid>
        </div>
        </div>
    );
};

export default SignUp;
