import {Formik, Form, ErrorMessage, Field} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import style from "./CharSearchForm.module.scss";

const CharSearchForm=({searchCharacter, search, buttonDisabled})=> {
    
    const results = !search ? null : search.length > 0 ?
                    <div className={style.searchWrapper}>
                        <div className={style.searchSuccess}>There is! Visit {search[0].name} page?</div>
                       <Link to={`/character/${search[0].id}`} > <button className="button button__grey">To page</button></Link>
                     </div> : 
                    <div className={style.searchError}>
                        The character was not found. Check the name and try again
                    </div>;
    return (
<div className={style.searchForm}>

<Formik
                initialValues = {{
                    charName: search
                }}
                validationSchema = {Yup.object({
                    charName: Yup.string().required("This field is required")
                })}
                onSubmit = { ({charName}) => {
                    searchCharacter(charName);
                }}
            >
                <Form>
                    <label className={style.searchLabel} htmlFor="charName">Or find a character by name:</label>
                    <div className={style.searchContainer}>
                        <Field 
                            id="charName" 
                            name="charName" 
                            type="text" 
                            placeholder="Enter name"/>
                        <button 
                            type="submit" 
                            className="button button__red"
                             disabled={buttonDisabled}>
                            find                       
                        </button>
                    </div>
                    <ErrorMessage component="div" className={style.searchError} name="charName" />
                </Form>
            </Formik>
            {results}
 </div>
    )
}

export default CharSearchForm