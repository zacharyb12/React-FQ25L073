// Todo List

// Tache :
// - id (number), 
// - Nom ( string ) , 
// - priorité (basse , normal , urgent) , 
// - un status (booleen)

// 1. Le composant parent implemente les actions et la liste
//-  Ajouter
//- Modifier
//- Supprimer 


// 2. Un composant enfant pour ajouter une tache : 
// -formulaire avec soumission
// - Appel de la fonction du parent : ajouter

// 3. Un composant enfant pour afficher la liste des taches : 
// - Appel des fonctions du parent :Modifier le status,supprimer une tache
// - Si la tache est urgente , l'afficher en rouge
// - Si la tache est normale , l'afficher en vert
// - Si la tache est basse , l'afficher en bleu
// Si la tache est terminée , l'afficher en gris
// Modifier 
// supprimer

// 4. Bonus :
// Composant Pour afficher un element de la liste
// Composant pour afficher la liste
// Affichage avec styles
import { useState } from "react";

function ContainerPage(){

    // Etat de la liste des taches
    const [ todos , setTodos] = useState([]);

    // ajout d'une tache
    function addTodo(newTodo){
        newTodo.id = todos.length + 1;
        setTodos([...todos,newTodo]);
    }

    // suppression d'une tache
    function deleteTodo(id){
        setTodos(todos.filter( todo => todo.id !== id ));
    }

    // modification d'une tache
    function updateTodo(id,updatedTodo){
        setTodos(todos.map(todo => {
            if(todo.id === id){
                return {...todo,...updatedTodo}
            }
            return todo;
        }))
    }

return (
    <>
    <h1 className="text-center mt-3">TodoList</h1>

    <div className="card w-25 m-auto mt-3 p-1 text-center">
        <InputTodo addTodo={addTodo} />

    </div>
    <div>
        <TodoList updateTodo={updateTodo} deleteTodo={deleteTodo} todos={todos} />

    </div>


    </>
)

}

function InputTodo({addTodo}){

function callAddTodo(e){

e.preventDefault();
let newTodo = {
    id : 0,
    name : e.target.name.value,
    description : e.target.description.value,
    priority : e.target.priority.value,
    status : false
}


addTodo(newTodo);
}

    return (
        <>
        <form onSubmit={callAddTodo}>
            <div className="p-1">
                <label htmlFor="name">Nom</label>
                <br />
                <input type="text" id="name" />
            </div>
            <div className="p-1">
                <label htmlFor="">Description</label>
                <br />
                <input type="text" id="description" />
            </div>

            <div className="p-1">
                <label htmlFor="">Priorité</label>
                <br />

                <select name="" id="priority">
                    <option value="basse">Basse</option>
                    <option value="normale">Normale</option>
                    <option value="urgente">Urgente</option>
                </select>
            </div>
            <button type="submit">Ajouter</button>

        </form>
        </>
    )
}

function TodoList({updateTodo , deleteTodo, todos}){

    const [isUpdated , setIsUpdated] = useState(false);

    function OpenFormUpdate(todoId){
        setIsUpdated(isUpdated === todoId ? null : todoId);
    }

    function callUpdateTodo(e,todoId){
        e.preventDefault();
        let updatedTodo = {
        name : e.target.name.value,
        description : e.target.description.value,
        priority : e.target.priority.value,
        status : e.target.status.checked
        }

        updateTodo(todoId,updatedTodo);
        setIsUpdated(false);
    }

    function couleurTodo(todo){
        if (todo.status === true){
            return 'grey';
        }

        switch (todo.priority){
            case 'urgente' : return 'red';
            case 'normale' : return 'green';
            case 'basse' : return 'blue';
            default : return 'black';
        }
    }


    return (
        <>
        <ul className="card w-75 m-auto mt-3 p-2 text-center list-unstyled">
            {todos.map((todo) => (
                <TodoItem
                todo={todo}
                couleurTodo={couleurTodo}
                isUpdated={isUpdated}
                callUpdateTodo={callUpdateTodo}
                deleteTodo={deleteTodo}
                openFormUpdate={OpenFormUpdate} 
                />
            ))}
        </ul>
        </>
    )
}

function TodoItem({todo, couleurTodo, isUpdated,callUpdateTodo ,deleteTodo , openFormUpdate}){
    return(
        <>
        <li key={todo.id} style={{color : couleurTodo(todo)}} className="">
                    {isUpdated === todo.id ? (
                        <>
                        <form onSubmit={(e) => callUpdateTodo(e,todo.id)}>
                            <div>
                                <label htmlFor="name">Nom</label>
                                <br />
                                <input type="text" id="name" />
                            </div>
                            <div>
                                <label htmlFor="">Description</label>
                                <br />
                                <input type="text" id="description" />
                            </div>

                            <div>
                                <label htmlFor="">Priorité</label>
                                <br />
                                <select name="" id="priority">
                                    <option value="basse">Basse</option>
                                    <option value="normale">Normale</option>
                                    <option value="urgente">Urgente</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Statut</label>
                                <br />
                                <input type="checkbox" id="status" />
                            </div>
                            <button type="submit">modifier</button>
                        </form>
                        </>
                    ) : (
                        <div className="card w-50 ">
                        <h3 className="p-1">{todo.name} | Priorité : {todo.priority}</h3>
                        <p className="p-1">{todo.description} </p>
                        <p p-1>Status : {todo.status ? 'Terminée' : 'En cours'}</p>
                        <button className="m-2 bg-secondary p-05 rounded" onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button className="m-2 bg-primary p-05 rounded" onClick={() => openFormUpdate(todo.id)}>Update</button>
                        </div>
                    )}
                </li>
        </>
    )
}



export default ContainerPage;