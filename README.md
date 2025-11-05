# Integration of External UI Components in React

This project demonstrates the integration of shadcn/ui components in a React application built with Vite. It features three different small applications showcasing various UI components.

## 🎯 Objective

Practice building different small apps using shadcn/ui components to understand their integration and usage in a React environment.

## 📌 Featured Apps

### 1. Feedback Form App
- **Components Used**: Card, Input, Textarea, Button
- **Features**: 
  - Collect Name, Email, and Feedback from users
  - Form validation
  - Display submitted data below the form
  - Responsive design

### 2. Image Slideshow App
- **Components Used**: Card, Button, with navigation controls
- **Features**:
  - Display 3 placeholder images from Picsum
  - Next and Previous navigation buttons
  - Slide indicators with direct navigation
  - Smooth transitions and modern UI

### 3. Todo List App
- **Components Used**: Input, Button, Card, Checkbox
- **Features**:
  - Add new todos
  - Mark todos as complete/incomplete
  - Delete individual todos
  - Clear all completed todos
  - Task counter and progress tracking

## 🛠️ Tech Stack

- **React 19.1.1** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & customizable SVG icons

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── checkbox.jsx
│   │   ├── input.jsx
│   │   ├── tabs.jsx
│   │   └── textarea.jsx
│   └── apps/                  # Application components
│       ├── FeedbackForm.jsx
│       ├── ImageSlideshow.jsx
│       └── TodoList.jsx
├── lib/
│   └── utils.js              # Utility functions
├── App.jsx                   # Main application
├── main.jsx                  # Application entry point
└── index.css                 # Global styles with Tailwind
```

## 🎨 UI Components Used

- **Card**: Container component for content sections
- **Button**: Interactive button with various variants
- **Input**: Form input field with built-in styling
- **Textarea**: Multi-line text input
- **Checkbox**: Toggle input for boolean values
- **Tabs**: Navigation between different app sections

## 🔧 Key Features

- **Responsive Design**: All apps work seamlessly across different screen sizes
- **Accessibility**: Built on Radix UI primitives for maximum accessibility
- **Modern Styling**: Tailwind CSS with custom design tokens
- **Type Safety**: ESLint configuration for code quality
- **Component Reusability**: Modular component architecture

## 🎯 Learning Outcomes

- Integration of external UI component libraries
- Building responsive and accessible user interfaces
- State management in React functional components
- Form handling and validation
- Component composition and reusability
- Modern CSS-in-JS solutions with Tailwind

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to contribute to this project by submitting issues or pull requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
