# Documento de visão

## PlanIf

### Histórico da Revisão 

|  Data  | Versão | Descrição | Autor |
|:-------|:-------|:----------|:------|
| 05/07/2021 |  **`1.0`** | Versão Inicial  | José Jailson, Mariana Raquel, Marina Medeiros, Ruth Silva e Viviane Pereira |


### 1. Objetivo do Projeto 

O projeto __PlanIf__ tem como objetivo ser um aplicativo para estudantes organizarem suas rotinas de estudos.

### 2. Descrição do problema 

| |  |
|:------------------|:-----|
| **_O problema_**    | é a falta de uma plataforma simples e intuitiva na qual seja possível a organização de horários, prazos, objetivos e anotações |
| **_afetando_**      | as pessoas que desejam organizar seus estudos |
| **_cujo impacto é_**| a mau organização e desempenho dos estudantes |
| **_Uma boa solução seria_** | a criação de um aplicativo que reúna todas as funcionalidades necessárias para organização, sem que seja algo muito complexo. |
| |  |

### 3. Descrição dos usuários

| Nome | Descrição | Responsabilidades |
|:---  |:--- |:--- |
| Estudante  | Estudantes, a partir do ensino fundamental II, que usam o aplicativo para organizar sua rotina e tarefas | Cadastrar tarefas, eventos, metas etc.|

### 4. Descrição do ambiente dos usuários
Por se tratar de um aplicativo de organização, as tarefas executadas sobre o sistema são feitas pelos próprios usuários. O estudante poderá registrar novos registros a qualquer momento e para isso o sistema deve ter a capacidade de estar habilitado a receber requisições 24 horas por dia, durante os 7 dias da semana.

Os locais para interação com o sistema são diversos e estes podem ter uma variação da qualidade de sinal de internet, fato que pode limitar o acesso ao sistema.

### 5. Principais necessidades dos usuários
Os estudantes sentem falta de um ambiente apropriado para organizar seus horários e tarefas. Atualmente se tem usado alguns aplicativos de organização como Notion, Tick Tick, Google Agenda, Forest, Habit Tracker, entre outros. Mas alguns desses sistemas são complexos, com muitas funcionalidades, ou são simples, sem ter tudo necessário. Isso faz com que os estudantes precisem utilizar mais de aplicativo para atender suas necessidades, ou passar por um processo de adaptação até aprenderem a utilizar as funcionalidades dos mais complexos. Além disso, outro ponto que é bastante observado é a falta de um aplicativo na língua portuguesa, ou que apresente funcionalidades,que são necessárias, sem precisar utilizar um modo premium.

Neste contexto, eles gostariam que fosse construído um sistema que reúnesse as funcionalidades de que o estudante tem mais necessidade, sem transformar isso numa plataforma complexa e de díficil entendimento.

### 6.	Alternativas concorrentes
Como alternativas concorrentes os sistema de organização existentes atualmente: Notion, Tick Tick, Google Agenda, Forest, Habit Tracker, Agenda física, etc.

### 7.	Visão geral do produto
Esse aplicativo de organização deve ser construído para uso em navegadores (browsers) existentes no mercado, porém seu foco será para celular. Sua interface com usuário deve possuir um boa usabilidade e para isto deve se aproximar da forma de interação prática, sem informação em excesso e fácil de usar.

O sistema deve possuir uma logo marca que identifique-o e que possa ser utilizado pelos seus membros para divulgação em eventos.

### 8. Requisitos Funcionais

| Código | Nome | Descrição |
|:---  |:--- |:--- |
| RF01 | Gerenciar Perfil | Este requisito tem o propósito de habilitar o estudante criar, consultar, editar e desativar seus dados de perfil. A opção de criar só fica disponível para o visitante para que ele possa realizar seu cadastro e começar a organizar sua rotina. A opção de consultar e editar só fica disponível para quem já tem um perfil cadastrado. A opção de desativar, fica visível para o dono do perfil. |
| RF02 | Gerenciar Hábitos | O estundate poderá cadastrar um novo hábito. Ele poderá visualizar uma lista com os hábitos cadastrados, onde será possível editar ou excluir |
| RF03 | Gerenciar Disciplinas | O estundate poderá cadastrar uma nova disciplina. Ele poderá visualizar uma lista com os hábitos cadastrados, onde será possível editar ou excluir |
| RF04 | Gerenciar Tarefas | O estundate poderá cadastrar uma nova tarefa. Ele poderá visualizar uma lista com os hábitos cadastrados, onde será possível editar ou excluir |
| RF05 | Gerenciar Horários | O estundate poderá cadastrar um novo horário. Ele poderá visualizar uma lista com os hábitos cadastrados, onde será possível editar ou excluir |
| RF06 | Gerenciar Eventos | O estundate poderá cadastrar um novo evento. Ele poderá visualizar uma lista com os hábitos cadastrados, onde será possível editar ou excluir |
| RF07 | Gerenciar Anotações | O estundate poderá cadastrar uma nova anotação. Ele poderá visualizar uma lista com os hábitos cadastrados, onde será possível editar ou excluir |
| RF08 | Fazer login / logout | Membros podem entrar e sair da conta. |


### 9. Requisitos não-funcionais

| Código | Nome                  | Descrição                                                    | Categoria   | Classificação |
| ------ | --------------------- | ------------------------------------------------------------ | ----------- | ------------- |
| RNF01  | Design responsivo     | O sistema deve adaptar-se a qualquer tamanho de tela de dispositivo, seja, computador, tablets ou smart phones. | Usabilidade | Obrigatório   |
| RNF02  | Criptografia de dados | Dados como senha e email do integrantes da rede devem ser gravadas de forma criptografada no banco de dados. | Segurança   | Obrigatório   |
| RNF03  | Facilidade de uso     | O sistema deve ter uma interface amigável que possibilite a seus usuários uma interação fácil sem que para isso precise fazer treinamentos e/ou ler manuais. | Usabilidade | Obrigatório   |