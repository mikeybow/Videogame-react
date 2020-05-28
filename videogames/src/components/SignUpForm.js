import React from 'react';
import { useFormik } from 'formik'

function SignUpForm() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    console.log('Form values', formik.values)

    return(
        <div>
            <form>
                <label htmlFor='email'>E-mail</label>
                <input type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

                <label htmlFor='password'>Password</label>
                <input type='text' id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type='text' id='confirmPassword' name='confirmPassword' onChange={formik.handleChange} value={formik.values.confirmPassword} />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;