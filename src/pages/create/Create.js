import { useState, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
// styles
import './Create.css';



export default function Create() {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null)

    const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')

    const handleSubmit = (e) => {
        e.preventDefault()
        postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
    }

    const handleAdd = (e) => {
        e.preventDefault()
        let ing = newIngredient.trim()
        ing = ing.charAt(0).toUpperCase() + ing.slice(1).toLowerCase()
        if (ing && !ingredients.includes(ing)){
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient('')
        ingredientInput.current.focus()
    }

    return (
        <div className='create'>
            <h2 className='page-title'>Add a new recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Title:</span>
                    <input
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>
                <label>
                    <span>Ingredients:</span>
                    <div className='ingredients'>
                        <input
                            type='text'
                            onChange={(e) => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button className='btn' onClick={handleAdd}>Add</button>
                    </div>
                </label>
                <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
                <label>
                    <span>Method:</span>
                    <textarea
                        type='text'
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label>
                    <span>Cooking time:</span>
                    <textarea
                        type='number'
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>
                <button className='btn'>Add recipe</button>
            </form>
        </div>
    )
}