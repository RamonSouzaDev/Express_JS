<h4 align="center"> 
	🚧 BACKEND EXPRESSJS API 123 Milhas 🚀 PROJETO API DE AGRUPAMENTO DE VOOS 🚧
</h4> 

### 💻
Desenvolvimento de API para agrupamento de voos, conforme a ida, volta, tarifação e o preço.

**implementação:**

- ### Arquitetura 
- EXPRESSJS
- NODE 12.18

- ### Configurações
- O endereço da api utilizada como fonte de dados (http://prova.123milhas.net/) pode ser alterado no arquivo .env:
- MILHAS_API_ADDRESS

**ENDPOINT:**

| Operação        | Entrada      | Saída |
| ------|-----|-----|
| **/api/getFlights**<br> | <span style="color:green">**GET**</span>  |  (array com todos voos)    | 
| **/api/getFlights/groupFlight**<br>  |  <span style="color:red">**GET**</span> |  (array com voos ordenados) |

## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo com uma parte:
1. Back end NODEJS / EXPRESSJS

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [NODE][NODE], , [EXPRESSJS][EXPRESSJS]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]


### 🧭 Rodando a aplicação (Back End)

```bash 
# Clone este repositório
$ git clone https://github.com/RamonSouzaDev/Express_JS

# Acesse a pasta do projeto no seu terminal/cmd
$ cd Express_JS

# Instale as dependências
$ npm install / npm update

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:3002 - acesse http://localhost:3002

```

## Authors

* **RAMON MENDES** - *DEVELOPER* - **[GITHUB]**(https://github.com/RamonSouzaDev/Back_End) \* 