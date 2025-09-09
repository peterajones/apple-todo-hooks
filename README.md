## Apple Style Todo List in React

A modern React todo application inspired by Apple's Reminders app, featuring a clean interface and intuitive functionality. Originally created from a code challenge, this project has been fully refactored to use modern React patterns including functional components, hooks, and modular architecture.

### Key Features

- **Apple-inspired Design**: Clean, minimalist interface matching Apple's Reminders app aesthetic
- **Smart Todo Management**: Click to complete, automatic hiding of completed items
- **Persistent Storage**: Automatically saves todos and list name to localStorage
- **Real-time Counters**: Dynamic tracking of remaining tasks
- **Modern React Architecture**: Fully refactored with hooks and functional components

![](images/sample.png)

### How It Works

- **Editable List Name**: Click the list name to edit (defaults to "Todo List")
- **Add Todos**: Type in the input field and click the + button to add items
- **Complete Todos**: Click any todo item to mark it as complete and automatically hide it
- **Show/Hide Completed**: Toggle visibility of completed items with the button below the list
- **Delete Completed**: Completed items show a delete button (–) for permanent removal
- **Undo Completion**: Click a completed item to mark it as incomplete and move it back to the active list

All data is automatically saved to your browser's localStorage.


## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:5678](http://localhost:5678)

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

### Testing

```bash
npm test
```

Runs the test suite in interactive watch mode.

## Technical Details

- **React 18**: Modern React with concurrent features
- **Functional Components**: All components use hooks instead of class components
- **Custom Hooks**: Custom `useLocalStorage` hook for persistent data
- **Modular Architecture**: Components are separated into individual files
- **Modern JavaScript**: ES6+ features throughout

