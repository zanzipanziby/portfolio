import React from 'react';
import {useFormik} from "formik";
import s from './Form.module.scss'

type ValuesType = {
    firstName?: string
    email?: string
    message?: string
}
export const Form = () => {
    const validate = (values: ValuesType) => {
        const errors: ValuesType = {};
        if (!values.firstName) {
            errors.firstName = 'Required'
        } else if (values.firstName.length < 3) {
            errors.firstName = 'Must be at least 3 characters.'
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.message) {
            errors.message = 'Required'
        } else if (values.message.length < 10) {
            errors.message = 'Must be at least 10 characters.'
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            message: ''
        },
        validate,

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <input
                type="text"
                placeholder={"First Name"}
                {...formik.getFieldProps('firstName')}
                className={s.firstNameField}
            />
            {formik.errors.firstName !== 'Required' && formik.touched.firstName && <div>{formik.errors.firstName}</div>}
            <input
                type="text"
                placeholder={"Your Email Address"}
                {...formik.getFieldProps('email')}
                className={s.emailField}
            />
            {formik.errors.email !== 'Required' && formik.touched.email && <div>{formik.errors.email}</div>}
            <textarea
                placeholder={"Message"}
                {...formik.getFieldProps('message')}
                className={s.messageField}
            />
            {formik.errors.message !== 'Required' && formik.touched.message && <div>{formik.errors.message}</div>}
            <button>send message</button>
        </form>
    );
};

