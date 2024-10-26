**Plano Atualizado de Implementação do Sistema para a Guilda "Corvos de Ephraim"**

---

### **1. Stack Tecnológico**

- **Framework Principal**: **Next.js** (para front-end e back-end)
  - Utilizar o Next.js permite manter o front-end e o back-end em um único framework, simplificando o desenvolvimento.
- **Bibliotecas e Ferramentas**:
  - **React**: Base para construção de interfaces de usuário.
  - **shadcn/ui**: Fornece componentes UI pré-construídos e estilizados.
  - **Tailwind CSS**: Facilita a estilização rápida e responsiva.
- **Linguagem de Programação**: **JavaScript**
  - Optar por JavaScript para todo o desenvolvimento, conforme preferência.

---

### **2. Autenticação e Banco de Dados com Supabase**

- **Objetivo**: Utilizar o Supabase para gerenciamento de autenticação e armazenamento de dados.
- **Implementação**:
  - **Autenticação**:
    - **Supabase Auth**: Gerencia a autenticação de usuários com suporte a provedores OAuth.
      - **Provedores de Login**:
        - **E-mail (Passwordless)**: Usuários recebem um link mágico para login.
        - **Discord OAuth**: Permite login via conta do Discord.
  - **Banco de Dados**:
    - **Supabase Database**: Banco de dados PostgreSQL gerenciado.
    - **Armazenamento**:
      - Tabelas para armazenar informações de usuários, missões, progresso, imagens, etc.
- **Benefícios**:
  - Integração simplificada com Next.js através de APIs do Supabase.
  - Segurança e escalabilidade garantidas pelo Supabase.

---

### **3. Página de Missões**

- **Funcionalidade**: Exibir missões com checkboxes que podem ser marcados pelos usuários e salvos no banco de dados.
- **Implementação**:
  - **Interface**:
    - Página que lista as missões disponíveis, utilizando componentes do shadcn/ui.
    - Cada missão apresenta um checkbox para marcar conclusão.
  - **Geração de Missões**:
    - Criar um sistema que gera missões aleatórias com base em masmorras pré-definidas armazenadas no Supabase.
  - **Salvamento de Dados**:
    - Ao marcar/desmarcar uma missão, o estado é atualizado no Supabase via chamadas às **API Routes** do Next.js.
  - **Sincronização**:
    - Utilizar SWR (stale-while-revalidate) ou React Query para gerenciar o estado e sincronização dos dados no front-end.

---

### **4. Integração com Bot do Discord**

- **Estrutura do Projeto**:
  - Dentro do mesmo repositório, criar uma pasta separada para o bot (ex: `/discord-bot`).
- **Implementação**:
  - **Linguagem**: JavaScript, usando o **@sapphire/framework**.
    - O @sapphire/framework oferece uma estrutura organizada e modular para bots do Discord.
  - **Funcionalidades do Bot**:
    - Notificar sobre novas missões ou eventos.
    - Permitir que administradores aprovem/rejeitem imagens diretamente pelo Discord.
    - Interagir com o sistema via chamadas às **API Routes** do Next.js.
- **Comunicação com o Next.js**:
  - O bot faz requisições HTTP às rotas de API do Next.js para obter ou atualizar informações no Supabase.
  - Utilizar tokens de autenticação ou chaves de API para segurança nas comunicações.

---

### **5. Galeria de Imagens com Revisão**

- **Funcionalidade**: Usuários podem sugerir imagens para a galeria pública, que passarão por um processo de revisão.
- **Processo de Sugestão**:
  - **Front-end**:
    - Formulário para upload de imagens ou inserção de URLs.
    - Campos adicionais (descrição, créditos).
  - **Back-end**:
    - Ao submeter, a imagem é salva no Supabase Storage com status "pendente".
- **Processo de Revisão**:
  - **Via Painel Admin**:
    - Administradores acessam uma página dedicada onde podem visualizar, aprovar ou rejeitar imagens pendentes.
  - **Via Discord**:
    - O bot notifica um canal específico quando há novas imagens para revisão.
    - Administradores podem usar comandos como `/aprovar [ID]` ou `/rejeitar [ID]`.
- **Após Aprovação**:
  - Imagem é exibida na galeria pública do site.
  - Dados são atualizados no Supabase para refletir o novo status.

---

### **6. Painel de Administração**

- **Acesso**: Restrito a usuários com permissões de administrador, gerenciadas pelo Supabase Auth.
- **Funcionalidades**:
  - **Gerenciamento de Imagens**: Aprovar ou rejeitar imagens sugeridas.
  - **Gerenciamento de Usuários**: (Se necessário) Promover usuários a administradores.
- **Implementação**:
  - Verificar permissão do usuário em cada rota protegida.
  - Utilizar componentes consistentes para uma experiência uniforme.

---

### **7. Simplificação do Back-end com Next.js e Supabase**

- **API Routes do Next.js**:
  - Criar rotas de API que atuam como intermediárias entre o front-end/bot e o Supabase.
  - Exemplos de rotas:
    - `/api/missions`: Gerencia operações relacionadas a missões.
    - `/api/images`: Gerencia upload e revisão de imagens.
- **Interação com o Supabase**:
  - Utilizar o SDK do Supabase para realizar operações no banco de dados e armazenamento.
- **Benefícios**:
  - Centraliza a lógica de negócio.
  - Facilita a manutenção e a escalabilidade.

---

### **8. Organização do Repositório**

- **Estrutura**:
  - Raiz do projeto para o aplicativo Next.js.
  - Pasta `/discord-bot` para o bot do Discord usando @sapphire/framework.
- **Scripts**:
  - Definir scripts no `package.json` para iniciar o Next.js e o bot separadamente.
    - Ex: `"dev": "next dev"`, `"dev:bot": "node discord-bot/index.js"`.
- **Gerenciamento de Dependências**:
  - Manter dependências separadas para o projeto Next.js e para o bot, ou consolidar conforme necessário.

---

### **9. Implantação**

- **Site**:
  - **Vercel**: Ideal para hospedar aplicativos Next.js.
  - Configurar variáveis de ambiente necessárias para conexão com o Supabase.
- **Bot do Discord**:
  - **Heroku**, **Railway** ou outro serviço compatível.
  - Certificar-se de que o serviço suporta a execução contínua do bot e permite saída de rede para comunicar-se com o Next.js API.
- **Configurações**:
  - Manter variáveis sensíveis fora do código, utilizando arquivos `.env` ou as configurações das plataformas de hospedagem.
  - Variáveis necessárias:
    - URLs e chaves de API do Supabase.
    - Tokens do Discord Bot.
    - Chaves de segurança para comunicação entre o bot e o Next.js.

---

### **10. Considerações Finais**

- **Segurança**:
  - Garantir que todas as comunicações entre o bot, o Next.js e o Supabase sejam seguras.
  - Implementar validação e sanitização de dados para evitar ataques como injeção de SQL ou XSS.
- **Teste e Qualidade**:
  - Realizar testes para verificar o funcionamento correto de todas as funcionalidades.
  - Considerar o uso de ferramentas de linting e formatação para manter a consistência do código.
- **Documentação**:
  - Documentar rotas de API, estruturas de dados e instruções para desenvolvedores futuros.
  - Incluir um README detalhado no repositório.

---

**Resumo**

Este plano atualizado incorpora o uso do **Supabase** para autenticação e banco de dados, proporcionando uma solução completa e integrada para o gerenciamento de usuários e armazenamento de dados. A utilização do **@sapphire/framework** para o bot do Discord oferece uma estrutura robusta e modular, facilitando o desenvolvimento e a manutenção. Ao remover funcionalidades opcionais e focar nas necessidades essenciais, o plano torna-se mais objetivo e viável para a criação de um MVP funcional. A integração entre o bot e o sistema via APIs do Next.js garante que todos os componentes do sistema permaneçam sincronizados e que a comunicação seja eficiente.

---

Espero que este plano atualizado atenda às suas expectativas. Se precisar de mais informações ou ajustes adicionais, estou à disposição para ajudar!
