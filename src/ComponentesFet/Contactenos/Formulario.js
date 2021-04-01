import React from 'react'
import {Section , Container} from'react-bulma-components'

const Formulario =() =>{
return(

    <Section>
        <Container>
            <h1>Contactos la Fet</h1>
                    <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input"/>
            </div>
            </div>

            <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Text input"/>
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
            
            </div>
            </div>

            <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="email" placeholder="Email input" value="hello@"/>
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
            </div>

          

            <div class="field">
            <label class="label">Message</label>
            <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
            </div>

     

          

            <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Cancel</button>
            </div>
            </div>

        </Container>

    </Section>



)



}

export default Formulario