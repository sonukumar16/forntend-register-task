
import React from 'react';
import { Field } from "formik";
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import TextInput from "../../components/InputComponents/TextInput";
import RadioGroupInput from "../../components/InputComponents/RadioGroupInput";
import useStyles from "./signUpStyle";

const options = [
    { value: "female", label: "Female" }, 
    { value: "male", label: "Male" }, 
    { value: "other", label: "Other" }
];

const SignUpForm = (props) => {
    const classes = useStyles();
    const {
        values: { firstName, lastName, email, password,
            confirmPassword, termsCondition, mobile },
        handleSubmit,
        isValid,
    } = props;

    return (
        <Container className="py-4">
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                    <TextInput {...props}
                        label={"First Name"}
                        name="firstName"
                        value={firstName}
                        required={true}
                    />
                    <TextInput {...props}
                        label="Last Name"
                        name="lastName"
                        value={lastName}
                        required={true}
                    />
                    <TextInput {...props}
                        label="Email Address"
                        name="email"
                        value={email}
                        required={true}
                    />
                    <TextInput {...props}
                        label="Mobile"
                        name="mobile"
                        value={mobile}
                        required={false}
                    />
                    <TextInput {...props}
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        required={true}
                    />
                    <TextInput {...props}
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        required={true}
                    />
                    <Grid item xs={12}>
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Gender</FormLabel>
                            <Field
                                name="gender"
                                options={options}
                                component={RadioGroupInput}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox name="termsCondition" checked={termsCondition} color="primary" onChange={props.handleChange} />}
                            label="I accept terms & condition."
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={!isValid}
                >
                    Sign Up
          </Button>
            </form>
        </Container>
    );
};

export default SignUpForm;