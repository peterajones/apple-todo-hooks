# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern React todo list application inspired by Apple's Reminders app. Built with Create React App and fully refactored to use React 18, functional components, custom hooks, and modular architecture. Features persistent localStorage, intuitive todo management, and clean Apple-style UI.

## Development Commands

- `npm install` - Install project dependencies
- `npm start` - Start development server on port 5678 (http://localhost:5678)
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## Architecture

Modular component architecture with clean separation of concerns:

**Components:**
- **TodoList** (`src/components/TodoList/`): Main container managing state and orchestrating child components
- **ListName** (`src/components/ListName/`): Editable list title with completion counter
- **TodoForm** (`src/components/TodoForm/`): Input form for adding new todos
- **TodoItems** (`src/components/TodoItems/`): Renders todo list with completion/deletion controls
- **TodoListOptions** (`src/components/TodoListOptions/`): Toggle for showing/hiding completed items

**Custom Hooks:**
- **useLocalStorage** (`src/hooks/`): Manages localStorage persistence with automatic JSON serialization

## Key Features

- **localStorage Persistence**: Both list name and todos are automatically saved to localStorage
- **Todo States**: Each todo has `completed` and `hidden` properties for managing visibility
- **Completion Logic**: Completed todos are automatically hidden but can be toggled back to view
- **Apple-Style UI**: Custom CSS styling to match Apple Reminders app appearance

## Data Structure

Todo items have the following structure:
```javascript
{
  id: Date.now(), // timestamp-based ID
  title: string,
  completed: boolean,
  hidden: boolean // used for show/hide completed functionality
}
```

## State Management

- **Main State**: `todos` array managed with `useLocalStorage` hook in TodoList component
- **Local State**: Individual components manage their own form state with `useState`
- **Persistence**: Custom `useLocalStorage` hook automatically syncs state with localStorage
- **No External Libraries**: Pure React state management, no Redux or Context needed for this scope

## Development Notes

- All components are functional components using hooks
- State updates use immutable patterns with spread operators
- localStorage hook handles JSON serialization/deserialization and error handling
- Component props are kept minimal and focused on their specific responsibilities