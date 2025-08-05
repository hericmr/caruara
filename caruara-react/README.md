# Caruara: Um Livro a Céu Aberto

Um site moderno que preserva e apresenta um tesouro de sabedoria popular e medicina tradicional brasileira, com histórias da avó da autora sobre ervas medicinais, vida no sertão e memórias familiares.

## 🎯 Sobre o Projeto

Este projeto moderniza o site original "Caruara: Um Livro a Céu Aberto" usando React e Tailwind CSS, mantendo todo o conteúdo original intacto e respeitando a essência cultural do texto.

### Características Principais

- ✅ **Conteúdo Original Preservado** - Todo o texto mantido exatamente como no original
- 🎨 **Design Moderno** - Interface elegante e responsiva
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance Otimizada** - Carregamento rápido e suave
- ♿ **Acessível** - Seguindo as melhores práticas de acessibilidade

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilização
- **Vite** - Build tool e servidor de desenvolvimento
- **Google Fonts** - Playfair Display e Inter

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd caruara-react
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

### Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview da build de produção

## 📁 Estrutura do Projeto

```
caruara-react/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header/         # Cabeçalho com imagem de fundo
│   │   ├── Navigation/     # Menu de navegação
│   │   ├── StorySection/   # Seções do conteúdo
│   │   └── Footer/         # Rodapé
│   ├── pages/              # Páginas da aplicação
│   │   └── Home/           # Página principal
│   ├── data/               # Dados estruturados
│   │   └── storyContent.ts # Conteúdo do livro
│   └── styles/             # Estilos globais
├── public/                 # Arquivos estáticos
└── index.html             # HTML principal
```

## 🎨 Design System

### Paleta de Cores
- **Primária**: `#8B4513` (Saddle Brown) - Terra, raízes
- **Secundária**: `#F4A460` (Sandy Brown) - Calor, tradição  
- **Acento**: `#228B22` (Forest Green) - Ervas, natureza
- **Neutro**: `#F5F5DC` (Beige) - Fundo suave
- **Texto**: `#2F2F2F` (Dark Gray) - Legibilidade

### Tipografia
- **Títulos**: Playfair Display (elegante, serif)
- **Corpo**: Inter (moderna, legível)

## 📖 Conteúdo

O site apresenta o texto completo do livro "Caruara: Um Livro a Céu Aberto", organizado em seções:

1. **A Sabedoria da Avó** - Introdução sobre xarope de ervas
2. **Chás e Ervas Medicinais** - Sabugueiro e outras ervas
3. **Hortelã e Óleos Medicinais** - Remédios tradicionais
4. **Remédios para Furúnculos** - Folha de pimenta
5. **Vida no Sertão** - Memórias da infância
6. **Memórias da Infância** - Histórias da família
7. **Problemas de Saúde** - Experiências pessoais
8. **Banhos e Proteção contra Parasitas** - Medicina preventiva
9. **São Caetano e Limpeza** - Ervas para limpeza
10. **Dores de Barriga e Vermes** - Tratamentos tradicionais
11. **Transagem e Boldo** - Remédios para estômago
12. **A Experiência com Sete Sangrias** - Chá medicinal
13. **Canela e Noz Moscada** - Temperos medicinais
14. **Memórias da Avó** - Histórias finais

## 🔧 Configuração

### Tailwind CSS
O projeto usa Tailwind CSS v3 com configuração customizada para cores e tipografia.

### Fontes
As fontes Google Fonts são carregadas automaticamente via CSS.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deploy

O projeto pode ser facilmente deployado em:
- **Vercel**: `vercel --prod`
- **Netlify**: Conecte o repositório
- **GitHub Pages**: Configure as actions

## 📄 Licença

Este projeto preserva o conteúdo original do livro "Caruara: Um Livro a Céu Aberto" e deve ser usado respeitando os direitos autorais do texto original.

---

**Desenvolvido com ❤️ para preservar a sabedoria popular brasileira**
