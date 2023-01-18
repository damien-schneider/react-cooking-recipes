// hooks
import { useTheme } from '../hooks/useTheme';
// styles
import { Link } from 'react-router-dom';
import './RecipeList.css';

export default function RecipeList( { recipes }) {

    const {mode} = useTheme()

    if (recipes.length === 0){
        return (
            <div className='error'>
                <p>No recipes to show</p>
            </div>
        )
    }
    return (
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <div className={`card ${mode}`} key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                </div>
            ))}
        </div>
    )
}