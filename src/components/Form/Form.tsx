import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Form.css";
/**
 * Type checking for Component State
 */
type CompState = {
    formValues: object;
};
interface fieldValues {
    text: string;
    value: string
}

interface t {
    type: string | boolean, params: any[]
}
interface fields {
    field: string;
    id: string;
    label: string;
    value: string | boolean;
    type?: string;
    options?: fieldValues[];
    validationType: string;
    validations: t[];
    placeholder: string;
}

type CompProps = {
    formFields?: fields[];
}

/**
 * Component with a sample form using Formik
 */

export default class FormComponent extends React.Component<CompProps, CompState> {

    constructor(props: CompProps, state: CompState) {
        super(props);
        this.state = {
            formValues: {},
        };
    }

    fileNameRref = React.createRef<HTMLSpanElement>();

    initialValues = {};

    handleSubmit = (values: any) => {
        console.log(values);
    };

    createYupSchema = (schema, config) => {
        const { id, validationType, validations = [] } = config;
        if (!Yup[validationType]) {
          return schema;
        }
        if(validationType === "string"){
            let validator = Yup[validationType]();
            validations.forEach(validation => {
            const { params, type } = validation;
            if (!validator[type]) {
                return;
            }
            validator = validator[type](...params);
            });
            schema[id] = validator;
        }
        else if(validationType === "boolean"){
            let validator = Yup[validationType]();
            validations.forEach(validation => {
            let {type, params} = validation;
            validator = validator.oneOf([type], params);
            });
            schema[id] = validator;
        }
        return schema;
      }
    /*Validation Schema provided to Formik*/
    validationSchema = () => {
        const yepSchema = this.props.formFields.reduce(this.createYupSchema, {});
        console.log(yepSchema)
        return Yup.object().shape(yepSchema);
    };

    render() {
        let formFields = [];
        this.props.formFields.map((f, idx) => {
            this.initialValues[f.id] = f.value;
            if(f.field === "input"){
                if(f.type === "textarea"){
                formFields.push( <div className="inputFieldGroup">       
           
                <label htmlFor={f.id}>{f.label}</label>
                <div>
                    <Field name={f.id} id={f.id} placeholder={f.placeholder} as="textarea" />
                </div>

                <ErrorMessage name={f.id}>
                    {(errorMessage) => {
                        return (
                            <div className="errorMessage">{errorMessage}</div>
                        );
                    }}
                </ErrorMessage> 
                </div>)
                } else {
                    formFields.push( <div className="inputFieldGroup">       
               
                    <label htmlFor={f.id}>{f.label}</label>
                    <div>
                        <Field name={f.id} id={f.id} placeholder={f.placeholder} type={f.type} />
                    </div>
    
                    <ErrorMessage name={f.id}>
                        {(errorMessage) => {
                            return (
                                <div className="errorMessage">{errorMessage}</div>
                            );
                        }}
                    </ErrorMessage> 
                    </div>)
                    }
            }
            else if(f.field === "radio"){
                formFields.push(<div className="inputFieldGroup">
                                    <div>{f.label}</div>
                                    {
                                        f.options.map((option) => {
                                            return (<React.Fragment key={option.value}><Field type="radio" name={f.id} id={option.value} value={option.value} />
                                                <label htmlFor={option.value}>{option.text}</label>
                                                
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                        <ErrorMessage name={f.id}>
                                                        {(errorMessage) => {
                                                            return (
                                                                <div className="errorMessage">{errorMessage}</div>
                                                            );
                                                        }}
                                                </ErrorMessage>
                                    
                                </div>)
            }
            else if(f.field === "dropdown"){
                formFields.push(
                    <div className="inputFieldGroup">
                                    <div>
                                        <label htmlFor={f.id}>{f.label}</label>
                                    </div>
                                    <Field as="select" id={f.id} name={f.id}>
                                        {f.options.map((option) => {
                                            return (
                                                <option key={option.text} value={option.value}>
                                                    {option.text}
                                                </option>
                                            );
                                        })}
                                    </Field>
                                    <ErrorMessage name={f.id}>
                                        {(errorMessage) => {
                                            return (
                                                <div className="errorMessage">{errorMessage}</div>
                                            );
                                        }}
                                    </ErrorMessage>
                                </div>
                )
            }
            else if(f.field === "checkbox"){
                formFields.push(<div className="inputFieldGroup">
                <Field
                    type="checkbox"
                    name={f.id}
                    id={f.id}
                />
                
                <label htmlFor={f.id}>{f.label}</label>
                <ErrorMessage name={f.id}>
                                        {(errorMessage) => {
                                            return (
                                                <div className="errorMessage">{errorMessage}</div>
                                            );
                                        }}
                                    </ErrorMessage>
            </div>)
            }
        })
        console.log(this.initialValues);
        return (
            <React.Fragment>
                <Formik
                    initialValues={this.initialValues}
                    onSubmit={this.handleSubmit}
                    validationSchema={this.validationSchema}
                >
                    {(formikProps) => {
                        return (
                            <Form className="defaultForm">{ formFields }
                                <div className="inputFieldGroup">
                                    <button className="submit" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        );
                    }
                    }
                </Formik>
            </React.Fragment>
        );
    }
}
