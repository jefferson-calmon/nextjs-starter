
@REM Hefesto, o deus grego da forja e da metalurgia, é um habilidoso artesão retratado com um martelo e uma tenaz.
@REM Apesar de sua deficiência física, ele é conhecido por criar os objetos mais magníficos e avançados dos deuses.
@REM Sua habilidade na arte da forja é incomparável, tornando-o uma figura reverenciada e respeitada pelos deuses e mortais.
@REM Sua destreza como artesão é uma das características mais marcantes de Hefesto na mitologia grega.

@echo off

setlocal enabledelayedexpansion

if "%1"=="help" (
    @REM clear

    echo.
    echo Usage: hefesto ^[command^] ^<Name^> ^[flags^]
    echo.
    echo Commands:
    echo.
    echo   create:controller   Cria um novo controller.
    echo   create:context      Cria um novo contexto.
    echo   create:model        Cria um novo model.
    echo   help                Exibe esta mensagem de ajuda.
    echo   about               Exibe informações sobre a Hesto CLI.
    echo.
    echo.
    echo Flags:
    echo.
    echo   --rtdb              Cria um controller para o Realtime Database.
    echo.  --firestore         Cria um controller para o Firestore.
    echo.
    exit /b
)

if "%1" == "about" (
    echo.
    echo.Hesto CLI - Sobre
    echo.
    echo.A Hesto CLI foi inspirada em Hefesto, o artesão divino da mitologia grega. Hefesto era conhecido por sua habilidade em forjar armas poderosas e belas obras de arte. Da mesma forma, a Hefesto CLI visa fornecer uma ferramenta poderosa e útil para desenvolvedores e criadores.
    echo.
    echo.A Hesto CLI permite que você agilize suas tarefas de desenvolvimento e automatize processos repetitivos. Com uma série de comandos e recursos, você pode criar projetos, gerenciar dependências, executar tarefas de build e muito mais, tudo com facilidade e eficiência.
    echo.
    echo.Assim como Hefesto moldava o metal com maestria, a Hesto CLI é projetada para ajudá-lo a moldar seu código com precisão e elegância. Aproveite o poder da Hesto CLI para impulsionar sua produtividade e alcançar resultados impressionantes.
    echo.
    echo.Que a Hesto CLI seja sua ferramenta de confiança na forja do desenvolvimento!
)

if "%1" == "create:controller" (
    if not "%2"=="" (
        if not exist "src\controllers\" (
            mkdir "src\controllers"
        )

        set database=firestore

        if "%3" == "--rtdb" (
            set database=rtdb
        )
        if "%3" == "--firestore" (
            set database=firestore
        )

        (
            echo.import BaseController from './BaseController';
            echo.import { %2 } from 'models/%2';
            echo.
            echo.class %2Controller extends BaseController.!database!^<%2^> ^{
            echo.    constructor^(^) ^{
            echo.        const baseDbPath = 'examples';
            echo.
            echo.        super^(baseDbPath^);
            echo.        Object.assign^(this, new BaseController.!database!^<%2^>^(baseDbPath^)^);
            echo.    ^}
            echo.^}
            echo.
            echo.export default %2Controller;
        ) > "src\controllers\%2Controller.ts"

        code "src\controllers\%2Controller.ts"

        echo.
        echo Arquivo %2Controller.ts criado com sucesso!
    ) else (
        echo Argumento faltando. Por favor, especifique o nome do controller.
    )
)

if "%1" == "create:context" (
    if not "%2"=="" (
        if not exist "src\contexts\" (
            mkdir "src\contexts"
        )

        (
            echo.import ^{ createContext ^} from 'react'^;
            echo.
            echo.import ^{ %2 ^} from 'models/%2';
            echo.
            echo.interface %2ContextProps ^{
            echo.    children^: React.ReactNode^;
            echo.^}
            echo.
            echo.export interface %2ContextData ^{
            echo.
            echo.^}
            echo.
            echo.export const %2Context = createContext^(^{^} as %2ContextData^);
            echo.
            echo.export const %2Provider = ^(props: %2ContextProps^): JSX.Element =^> ^{
            echo.    return ^(
            echo.        ^<%2Context.Provider value=^{^{  ^}^}^>
            echo.            ^{props.children^}
            echo.        ^</%2Context.Provider^>
            echo.    ^);
            echo.^};
        ) > "src\contexts\%2Context.tsx"

        code "src\contexts\%2Context.tsx"

        echo.
        echo Arquivo %2Context.ts criado com sucesso!
    ) else (
        echo Argumento faltando. Por favor, especifique o nome do contexto.
    )
)

if "%1" == "create:model" (
    if not "%2"=="" (
        if not exist "src\models\" (
            mkdir "src\models"
        )

        (
            echo.import ^{ BaseModel ^} from './Base';
            echo.
            echo.export interface %2 extends BaseModel ^{
            echo.
            echo.^}
            echo.
        ) > "src\models\%2.ts"

        code "src\models\%2.ts

        echo.
        echo Modelo %2.ts criado com sucesso!
    ) else (
        echo Argumento faltando. Por favor, especifique o nome do modelo.
    )
)

if "%1" == "create:component" (
    if not "%2"=="" (
        if not exist "src\components\%2" (
            mkdir "src\components\%2"
        )

        (
            echo.import ^{ InputContainer ^} from './styles';
            echo.
            echo.interface ComponentProps ^{
            echo.
            echo.^}
            echo.
            echo.function Input^(props: ComponentProps^) ^{
	        echo.    return ^<InputContainer^>^</InputContainer^>;
            echo.^}
            echo.
            echo.export default Input;
            echo.
        ) > "src\components\%2\index.tsx"

        (
            echo.import styled from 'styled-components';
            echo.
            echo.export const InputContainer = styled.div`
            echo.
            echo.`;
            echo.
            echo.export default InputContainer;
            echo.
        ) > "src\components\%2\styles.tsx"

        code "src\components\%2\index.tsx"

        echo.
        echo O componente %2 foi criado com sucesso!
    ) else (
        echo Argumento faltando. Por favor, especifique o nome do componente.
    )
)
