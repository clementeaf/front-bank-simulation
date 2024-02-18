import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { regisgterValidationSchema, registerInitialValues } from "@/utils";
import { formFields } from "../utils";
import axios from "axios";
import { commonConfig } from "../config";
import { REGISTER_API } from "../services/routesToFetch";

export default function Register() {
  const renderFormFields = (fields) => {
    return fields.map((field) => (
      <div key={field.name}>
        {field.type !== "select" ? (
          <>
            <Field
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="w-[350px] border border-black/10 p-2 rounded-xl"
            />
            <ErrorMessage
              name={field.name}
              component="div"
              className="ml-1 text-red-600"
            />
          </>
        ) : (
          <>
            <Field
              as="select"
              name={field.name}
              className="w-[350px] border border-black/10 p-2 rounded-xl"
            >
              <option value="">{field.placeholder}</option>
              {field.options.map((option, index) => (
                <option
                  key={index}
                  value={option}
                  disabled={option !== "Vista"}
                >
                  {option}
                </option>
              ))}
            </Field>
            <ErrorMessage name={field.name} component="div" />
          </>
        )}
      </div>
    ));
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Formik
        initialValues={registerInitialValues}
        validationSchema={regisgterValidationSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(
              REGISTER_API,
              values,
              commonConfig
            );
            console.log(response);
          } catch (err) {
            console.error("Error: ", err);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col p-4 gap-3">
            {renderFormFields(formFields)}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 rounded-2xl bg-blue-600 text-white shadow-lg hover:shadow-sm ease-in-out duration-300"
            >
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
