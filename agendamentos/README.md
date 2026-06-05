# HairDay

<p align="center">
  Uma aplicação web moderna e responsiva para agendamento de cortes de cabelo, desenvolvida com foco total na Experiência do Usuário (UX) e design premium.
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-executar">Como Executar</a>
</p>

<br>

## 💻 Prévia da Aplicação

> **Dica Pro:** Para deixar seu repositório incrível, tire um print da tela e arraste a imagem para cá no editor do GitHub para exibi-la aqui.

<br>

## 💇‍♂️ Sobre o projeto

O **HairDay** é uma interface de agendamentos projetada para salões de beleza e barbearias. O foco principal deste projeto foi criar uma experiência de agendamento fluida e visualmente atraente, distanciando-se dos inputs nativos dos navegadores para entregar uma sensação de aplicativo premium.

---

## ✨ Funcionalidades

- **Agendamento Dinâmico:** Seleção de datas e horários em uma grade interativa separada por turnos (Manhã, Tarde, Noite).
- **Date Picker Customizado:** Implementação de um seletor de data estilizado com manipulação do calendário nativo através de `useRef`.
- **Validação e Prevenção de Conflitos:**
  - Bloqueio automático de dias passados e agendamentos para o dia atual.
  - Alerta imediato caso o usuário tente duplicar um agendamento no mesmo horário.
- **Filtro Diário:** A visualização da agenda na tela principal filtra os clientes baseado na data selecionada.
- **Transição Suave (UX):** Ao realizar um novo agendamento, a tela principal pula automaticamente para o dia agendado.
- **Persistência de Dados:** Uso de `LocalStorage` para garantir que os agendamentos não sejam perdidos ao recarregar a página (F5).
- **Design Totalmente Responsivo:** Menu lateral adaptado para dispositivos móveis (Drawer/Sidebar Off-canvas) com animações suaves e sobreposição (overlay).
- **Sem Layout Shift:** Correções visuais para garantir que a grade de horários não dê "pulos" ao carregar ou desativar horários.

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **[React](https://reactjs.org/)** (com Vite)
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)** (Estilização avançada e animações customizadas)
- **[Lucide React](https://lucide.dev/)** (Ícones)

---

## 🚀 Como executar

Para rodar este projeto na sua máquina, você precisará ter o [Node.js](https://nodejs.org/) instalado.

```bash
# Clone este repositório
$ git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)

# Acesse a pasta do projeto no terminal
$ cd NOME_DO_REPOSITORIO

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```
