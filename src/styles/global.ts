import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-family: 'Inter', Arial, sans-serif;

        -webkit-tap-highlight-color: transparent;
    }

    :root {
        --color-primary: ${({ theme }) => theme.colors.primary};
        --color-secondary: ${({ theme }) => theme.colors.secondary};

        --color-surface: ${({ theme }) => theme.colors.surface};

        --color-title: ${({ theme }) => theme.colors.title};
        --color-text: ${({ theme }) => theme.colors.text};

        --color-background: ${({ theme }) => theme.colors.background};
        --color-line: ${({ theme }) => theme.colors.line};

        --color-red-1: #e83f5b;
        --color-red-2: #ce4a4a;
        --color-red-3: #eb3223;

        --color-green-1: #00875f;
        --color-green-2: #00b37e;
        --color-green-3: #015f43;
        --color-green-4: #00291d;
        --color-green-5: #00875f;
        --color-green-6: #04d361;


        /* Fonts */
        --text-size: 1rem;
        --title-size: 2rem;

        /* Sizes */
        --border-radius: .25rem;
    }

    ::-webkit-scrollbar {
        width: 6px;
        background: transparent;
        padding-right: 3px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-surface);
    }

    .content {
        width: 1120px;
        margin: 0 auto;
    }

    html {
        scroll-behavior: smooth;
    }

    body.active {
        overflow: hidden;
        font-size: var(--text-size);
    }

    html, body, #root {
        position: relative;
        min-height: 100vh;
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => theme.colors.title};
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    img {
        user-select: none;
        pointer-events: none;
    }

    i {
        font-style: normal;
        font-weight: normal !important;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
    }

    .shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
    }

    .lucide {
        width: 1em;
        height: 1em;
    }

    @media (max-width: 1024px) {
        .content {
            width: 91%;
        }
    }

    @media (max-width: 834px) {
        .content {
            width: 91%;
        }
    }

    @media (max-width: 768px) {
        .content {
            width: 91%;
        }
    }

    @media (max-width: 540px) {
        .content {
            width: 89%;
        }
    }
`;

export const GlobalStyle = globalStyle as unknown as (
	props: Record<string, never>
) => JSX.Element;
