import type { Metadata } from 'next';
import '@/app/global.css';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
    title: "2astWon's Tech Blog",
    description: 'Make Better Place With Program',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies();
    const theme = cookieStore.get('theme')?.value;

    return (
        <html lang="kr" data-theme={theme}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <body>{children}</body>
        </html>
    );
}
