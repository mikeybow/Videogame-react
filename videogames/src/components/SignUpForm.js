import React from 'react';
import { useFormik } from 'formik'

function SignUpForm() {

    const formik = useFormik({})

    return(
        <div>
            <form>
                <label htmlFor='email'>E-mail</label>
                <input type='text' id='email' name='email' />

                <label htmlFor='password'>Password</label>
                <input type='text' id='password' name='password' />

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type='text' id='confirmPassword' name='confirmPassword' />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;