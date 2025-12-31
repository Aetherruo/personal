{/*Bahan Percobaan Theme.css, ThemeContext, useTheme*/}
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Navigation () {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <header>
                <p>Tema saat ini: {theme}</p>
                <button onClick={toggleTheme}>Ganti Tema</button>
            </header>
        </>
    )
}