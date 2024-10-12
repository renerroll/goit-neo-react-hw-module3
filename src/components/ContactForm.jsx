/* eslint-disable react/prop-types */
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import classes from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};
const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  number: Yup.string()
    .required("Required")
    .matches(phoneRegExp, "Number is not valid"),
});

function ContactForm({ onSubmit }) {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      valdateOnBlur={false}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
      validationSchema={ContactSchema}
    >
      <Form className={classes["contact-form"]}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage
          className={classes["error-message"]}
          name="name"
          component="span"
        />

        <label htmlFor={numberId}>Number</label>
        <Field type="tel" name="number" id={numberId} />
        <ErrorMessage
          className={classes["error-message"]}
          name="number"
          component="span"
        />

        <button className={classes["add-button"]} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
