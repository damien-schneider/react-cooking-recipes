import { useTheme } from '../hooks/useTheme';
import modeIcon from '../assets/mode-icon.svg'

//styles
import './ThemeSelector.css';

const themeColors = ['rgb(93, 0, 255)', '#249c6b', '#b70233']

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img
                    src={modeIcon}
                    onClick={toggleMode}
                    style={{marginLeft:"20px", filter: mode === 'light' ? 'invert(20%)' : 'invert(100%)'}}
                    alt="dark/light toggle icon"
                />
            </div>
            <div className='theme-buttons'>
                {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style = {{background: color}}
                    />
                ))}

            </div>
        </div>
    )
}
