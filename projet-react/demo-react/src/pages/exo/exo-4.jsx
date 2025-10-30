// creer un formulaire complet d'un utilisateur
// et afficher les informations sur la page
// affichage dans une Card (Bonus dans un composant - avec une image )
// Nom - Prenom - age - description - laguage préféré - (image) - (date de naissance)
import { useState } from "react";

function ExoFormUser(){
const [userInfo , setUserInfo] = useState({
    nom: "Doe",
    prenom: "John",
    age: "30",
    description: "Développeur web",
    language: "Français",
    image: "",
    dateNaissance: "1993-01-01"
})

const [imageURL, setImageURL] = useState("");

function submitForm(e){
    e.preventDefault();
    setUserInfo({
        nom : e.target.lastname.value,
        prenom : e.target.firstname.value,
        age : e.target.age.value,
        description : e.target.description.value,
        language : e.target.language.value,
        image : e.target.image.value,
        dateNaissance : e.target.birthdate.value
    })
    setImageURL(e.target.image.value);

}

    return (
        <>
        <h2>Formulaire d'utilisateur</h2>

        <div className="card w-50 mt-2 p-1 text-center">
            <h2>Sans composant Enfant</h2>
            <h4>Nom :{userInfo.nom} - {userInfo.prenom}</h4>
            <p>Age : {userInfo.age}</p>
            <p>Description : {userInfo.description}</p>
            <p>Language préféré : {userInfo.language}</p>
            <p>Date de naissance : {userInfo.dateNaissance}</p>
            <img src={imageURL} alt="" width={200} />
        </div>

        <div  className="card w-50 mt-2 p-1 text-center">
            <h2>Avec Composant Enfant</h2>
            <CardUser user={userInfo} />
        </div>

        <div  className="card w-50 mt-2 p-1 text-center">
            <h2>Formulaires User</h2>
                <form onSubmit={submitForm}>
                    <div>
                        <label htmlFor="">Nom</label>
                        <br />
                        <input type="text" id="lastname"/>
                    </div>
                    <div>
                        <label htmlFor="">Prénom</label>
                        <br />
                        <input type="text" id="firstname"/>
                    </div>
                    <div>
                        <label htmlFor="">Âge</label>
                        <br />
                        <input type="number" id="age" />
                    </div>
                    <div>
                        <label htmlFor="">Description</label>
                        <br />
                        <input type="text" id="description" />
                    </div>
                    <div>
                        <label htmlFor="">Langage préféré</label>
                        <br />
                        <input type="text" id="language" />
                    </div>
                    <div>
                        <label htmlFor="">Date de naissance</label>
                        <br />
                        <input type="date" id="birthdate" />
                    </div>
                    <div>
                        <label htmlFor="">image</label>
                        <br />
                        <input type="text" id="image" />
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
        </div>

        <div className="card w-50 mt-2 p-1 text-center">
        <h2>Formulaire avec composant Enfant</h2>
        <FormUser action={submitForm}/>
        </div>
        </>
    )
}

function CardUser({user}){
return (
    <>
    <div>
            <h4>Nom :{user.nom} - {user.prenom}</h4>
            <p>Age : {user.age}</p>
            <p>Description : {user.description}</p>
            <p>Language préféré : {user.language}</p>
            <p>Date de naissance : {user.dateNaissance}</p>
            <img src={user.image} alt="" width={200} />
        </div>
    </>
)
}

function FormUser({action}){
    return (
        <>
        <div  className="card w-50 mt-2 p-1 text-center">
            <h2>Formulaires User</h2>
                <form onSubmit={action}>
                    <div>
                        <label htmlFor="">Nom</label>
                        <br />
                        <input type="text" id="lastname"/>
                    </div>
                    <div>
                        <label htmlFor="">Prénom</label>
                        <br />
                        <input type="text" id="firstname"/>
                    </div>
                    <div>
                        <label htmlFor="">Âge</label>
                        <br />
                        <input type="number" id="age" />
                    </div>
                    <div>
                        <label htmlFor="">Description</label>
                        <br />
                        <input type="text" id="description" />
                    </div>
                    <div>
                        <label htmlFor="">Langage préféré</label>
                        <br />
                        <input type="text" id="language" />
                    </div>
                    <div>
                        <label htmlFor="">Date de naissance</label>
                        <br />
                        <input type="date" id="birthdate" />
                    </div>
                    <div>
                        <label htmlFor="">image</label>
                        <br />
                        <input type="text" id="image" />
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
        </div></>
    )
}

export default ExoFormUser;