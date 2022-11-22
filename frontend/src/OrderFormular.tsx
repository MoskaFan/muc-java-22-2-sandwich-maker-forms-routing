import {ChangeEvent, FormEvent, useEffect, useState} from "react";
type OrderFormularType = {
    id: string,
    name: string,
    patty: string,
    numberOfPatties: number,
    isGrilled: boolean;
    extraWishes: string;
}
 export default function OrderFormular(){
    const emptyForm = {
        id: "",
        name: "",
        patty: "",
        numberOfPatties: 0,
        isGrilled: true,
        extraWishes: "",
    }
    const [RegistrationForm, setRegistrationForm] = useState<OrderFormularType>(emptyForm)

     function handleOnChange(event: ChangeEvent<HTMLInputElement>){
         const fieldName = event.target.name
         const fieldTyp = event.target.type
         setRegistrationForm(prevState => ({


             ...prevState, [fieldName] : fieldTyp ? event.target.value : event.target.type
         }))
     }
     function handleSubmit(event: FormEvent<HTMLFormElement>){
         event.preventDefault();
         alert(RegistrationForm)
     }

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <h2>name</h2>
                <label>Bullete: <input type={"text"} name={"patty"} value={RegistrationForm.patty}
                                       onChange={handleOnChange}/></label>

                <label>Anzahl von Bulleten: <input type={"number"} name={"numberOfPatties"}
                                                   value = {RegistrationForm.numberOfPatties} onChange={handleOnChange}/></label>

                <label>Brot gegrillt: <input type={"checkbox"} name={"isGrilled"}
                                             checked={RegistrationForm.isGrilled} onChange={handleOnChange}/></label>

                <label>Extra Wünsche: <input type={"text"} name={"extraWishes"}
                                             value={RegistrationForm.extraWishes} onChange={handleOnChange}/></label>
            </form>
        </section>
    )

}