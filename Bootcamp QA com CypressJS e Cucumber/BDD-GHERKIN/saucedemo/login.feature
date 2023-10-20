#language: pt
Funcionalidade: Login do saucedemo
Como usuário
Quero logar no site
Para fazer compras

Contexto:
    Dado que eu acesse a página de autenticação do site

    Cenário: Autenticação válida
        Quando eu digitar o usuário "standard_user"
        E digitar a senha "secret_sauce"
        Então deve ser exibida a palavra "Products"

    Cenário: Usuário inexistente
        Quando eu digitar o usuário "super_user"
        E digitar a senha "secret_sauce"
        Então deve ser exibida uma mensagem de erro

    Cenário: com senha inválida
        Quando eu digitar o usuário "standard_user"
        E digitar a senha "gmfkee"
        Então deve ser exibida uma mensagem de erro