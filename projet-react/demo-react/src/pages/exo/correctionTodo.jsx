import { useState } from 'react';

// Composant pour ajouter une nouvelle tâche
function AddTodoForm({ onAddTodo }) {
    const [nom, setNom] = useState('');
    const [priorite, setPriorite] = useState('normal');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nom.trim()) {
            // Créer une nouvelle tâche avec un ID unique
            const newTodo = {
                id: Date.now(),
                nom: nom.trim(),
                priorite,
                status: false // false = non terminée
            };
            onAddTodo(newTodo);
            // Réinitialiser le formulaire
            setNom('');
            setPriorite('normal');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Ajouter une tâche</h3>
            <input
                type="text"
                placeholder="Nom de la tâche"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
            />
            <select value={priorite} onChange={(e) => setPriorite(e.target.value)}>
                <option value="basse">Basse</option>
                <option value="normal">Normal</option>
                <option value="urgent">Urgent</option>
            </select>
            <button type="submit">Ajouter</button>
        </form>
    );
}

// Composant pour afficher un élément de la liste
function TodoItem({ todo, index, onUpdateTodo, onDeleteTodo }) {
    // Fonction pour basculer le status de la tâche
    const toggleStatus = () => {
        const updatedTodo = { ...todo, status: !todo.status };
        onUpdateTodo(index, updatedTodo);
    };

    // Déterminer la couleur selon la priorité et le status
    const getItemStyle = () => {
        if (todo.status) {
            return { color: 'gray', textDecoration: 'line-through' };
        }
        
        switch (todo.priorite) {
            case 'urgent': return { color: 'red' };
            case 'normal': return { color: 'green' };
            case 'basse': return { color: 'blue' };
            default: return { color: 'black' };
        }
    };

    return (
        <div style={{ ...getItemStyle(), margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
            <span>{todo.nom} - Priorité: {todo.priorite}</span>
            <div>
                <button onClick={toggleStatus}>
                    {todo.status ? 'Marquer comme non terminée' : 'Marquer comme terminée'}
                </button>
                <button onClick={() => onDeleteTodo(index)} style={{ marginLeft: '10px' }}>
                    Supprimer
                </button>
            </div>
        </div>
    );
}

// Composant pour afficher la liste des tâches
function TodoList({ todos, onUpdateTodo, onDeleteTodo }) {
    if (todos.length === 0) {
        return <p>Aucune tâche à afficher</p>;
    }

    return (
        <div>
            <h3>Liste des tâches</h3>
            {todos.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    onUpdateTodo={onUpdateTodo}
                    onDeleteTodo={onDeleteTodo}
                />
            ))}
        </div>
    );
}

// Composant principal
function TodoExo() {
    const [listTodo, setListTodo] = useState([]);

    // Fonction pour ajouter une nouvelle tâche
    function addTodo(newTodo) {
        setListTodo([...listTodo, newTodo]);
    }

    // Fonction pour modifier une tâche existante
    function updateTodo(index, updatedTodo) {
        const newList = [...listTodo];
        newList[index] = updatedTodo;
        setListTodo(newList);
    }

    // Fonction pour supprimer une tâche
    function deleteTodo(index) {
        const newList = listTodo.filter((_, i) => i !== index);
        setListTodo(newList);
    }

    return (
        <>
            <h1>Correction Todo</h1>
            
            {/* Composant pour ajouter une tâche */}
            <AddTodoForm onAddTodo={addTodo} />
            
            {/* Composant pour afficher la liste des tâches */}
            <TodoList
                todos={listTodo}
                onUpdateTodo={updateTodo}
                onDeleteTodo={deleteTodo}
            />
        </>
    );
}

export default TodoExo;