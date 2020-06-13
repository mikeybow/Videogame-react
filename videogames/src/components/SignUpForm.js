import React from 'react';
import { useFormik } from 'formik'

const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validate = values => {
    let errors = {}

    if(!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }

    if(!values.password) {
        errors.password = 'Required'
    }

    if(!values.confirmPassword) {
        errors.confirmPassword = 'Required'
    }

    return errors
}

function SignUpForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('Form values', formik.values)

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                <label htmlFor='email'>E-mail</label>
                <input 
                  type='text' 
                  id='email' 
                  name='email' 
                  onChange={formik.handleChange} 
                  value={formik.values.email} 
                />
                
                {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                
                </div>

                <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input 
                  type='text' 
                  id='password' 
                  name='password' 
                  onChange={formik.handleChange} 
                  value={formik.values.password} 
                />
                
                {formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                
                </div>

                <div className='form-control'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input 
                  type='text' 
                  id='confirmPassword' 
                  name='confirmPassword' 
                  onChange={formik.handleChange} 
                  value={formik.values.confirmPassword} 
                />
                
                {formik.errors.confirmPassword ? <div className='error'>{formik.errors.confirmPassword}</div> : null}
                
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;