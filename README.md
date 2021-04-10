MCZBooks

Passo a passo para instalação:

Clone este repositório através da linha de comando:

git clone [git@github.com](mailto:git@github.com):matheusmcz/mczbooks.git

Instalando as dependências:

Acesse a pasta raiz do projeto e rode o comando:

`yarn` ou `npm install`

Dependências:

Aplicação desenvolvida em `React JS`

Utilizando:

`Typescript`, 

`styled-components` (para estilização), 

`axios` (para integração com api),

`react-modal` (criação do modal), 

`react-router-dom` (utilização de rotas ),

**Available Scripts**

No diretório do projeto você pode rodar o codigo:

### **`yarn start`**

Roda o projeto em modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000/) para visualização no browser.

Utilizado API da Ioasys, disponibilizada durante o CAMP. (trilha React JS) 2021.

Usabilidade:

Home

A página principal da aplicação apresenta um formulário de log-in, utilizando as credenciais:

```
Email: desafio@ioasys.com.br
Senha: 12341234
```

WebView:

Acessa a pagina de dashboard chamada de "catalogo" > apresenta uma lista de livros fornecida pela API.

Clicando nos card`s abre-se um modal com as informações completas.

É possível navegar através das páginas do catálogo utilizando os botões que encontram-se no final da tala.

## ScrenShots:

Log-in page:

![Untitled](https://user-images.githubusercontent.com/70182429/114256282-aeae5b00-998e-11eb-88ee-ab4da263c591.png)

![Untitled (1)](https://user-images.githubusercontent.com/70182429/114256291-b968f000-998e-11eb-9415-91c43f87cb21.png)

Catalogo:

![Untitled (2)](https://user-images.githubusercontent.com/70182429/114256303-cab1fc80-998e-11eb-81e0-d14f53066dd2.png)

Modal

![Untitled (3)](https://user-images.githubusercontent.com/70182429/114256309-dac9dc00-998e-11eb-9550-31faa934dea3.png)

![Untitled (4)](https://user-images.githubusercontent.com/70182429/114256315-e3baad80-998e-11eb-9e99-8472dd3faa37.png)

Video da aplicação:

https://user-images.githubusercontent.com/70182429/114256366-35633800-998f-11eb-9cff-47f7f768ad41.mp4

Pontos a melhorar:
Responsividade;

Pontos incompletos:
Mensagem de erro de log-in não foi implementado;
Refresh Token

