import { cookies } from 'next/headers';
import ThemeToggleClient from './ThemeToggleClient';

const ThemeToggle = () => {
    const theme = cookies().get('theme');
    return <ThemeToggleClient initTheme={theme ? theme.value : 'sunset'} />;
};

export default ThemeToggle;
