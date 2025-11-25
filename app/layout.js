import './globals.css';

export const metadata = {
  title: 'ЭКЖ СО — Дашборд',
  description: 'Электронный журнал всегда под рукой',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
