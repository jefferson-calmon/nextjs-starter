import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-family: 'Inter', Arial, sans-serif;
    }

    :root {
        --color-primary: ${({ theme }) => theme.colors.primary};
        --color-secondary: ${({ theme }) => theme.colors.secondary};

        --color-surface: ${({ theme }) => theme.colors.surface};

        --color-title: ${({ theme }) => theme.colors.title};
        --color-text: ${({ theme }) => theme.colors.text};

        --color-background: ${({ theme }) => theme.colors.background};

        --color-red-1: #e83f5b;
        --color-red-2: #ce4a4a;
        --color-red-3: #eb3223;

        --color-green-1: #00875f;
        --color-green-2: #00b37e;
        --color-green-3: #015f43;
        --color-green-4: #00291d;
        --color-green-5: #00875f;
        --color-green-6: #04d361;

        --color-line: #e7e7e9;

        /* Fonts */
        --text-size: 1.6rem;
        --title-size: 3.2rem;

        /* Fonts variantions */
        --text-size-1: calc(var(--text-size) - .1rem);
        --text-size-2: calc(var(--text-size) - .2rem);
        --text-size-3: calc(var(--text-size) - .3rem);
        --text-size-4: calc(var(--text-size) - .4rem);
        --text-size-5: calc(var(--text-size) - .5rem);
        --text-size-6: calc(var(--text-size) - .6rem);
        --text-size-7: calc(var(--text-size) - .7rem);
        --text-size-8: calc(var(--text-size) - .8rem);
        --text-size+1: calc(var(--text-size) + .1rem);
        --text-size+2: calc(var(--text-size) + .2rem);
        --text-size+3: calc(var(--text-size) + .3rem);
        --text-size+4: calc(var(--text-size) + .4rem);
        --text-size+5: calc(var(--text-size) + .5rem);
        --text-size+6: calc(var(--text-size) + .6rem);
        --text-size+7: calc(var(--text-size) + .7rem);
        --text-size+8: calc(var(--text-size) + .8rem);

        /* Sizes */
        --border-radius: .4rem;
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
        font-size: 10px;
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

    @media (max-width: 1024px) {
        html {
            font-size: 10px;
        }

        .content {
            width: 91%;
        }
    }

    @media (max-width: 834px) {
        html {
            font-size: 10px;
        }

        .content {
            width: 91%;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 10px;
        }

        .content {
            width: 91%;
        }
    }

    @media (max-width: 540px) {
        :root {
            --text-size: 15px;
            --title-size: 24px;
        }

        html {
            font-size: 9.5px;
        }

        .content {
            width: 90%;
        }
    }
`;

export const GlobalStyle = globalStyle as unknown as (
	props: Record<string, never>
) => JSX.Element;
