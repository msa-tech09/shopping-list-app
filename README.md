# React Shopping List App

This is a simple React-based shopping list application that allows users to add, edit, check, and delete items. It also provides a notification system to display success and error messages.

## Features

- Add items to the shopping list.
- Edit items in the list.
- Check and uncheck items.
- Delete checked items.
- Notification system for success and error messages.

## Installation

Follow these steps to set up and run the application locally:

1. Clone the repository to your local machine:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd shopping-list-app
   ```

3. Install the required dependencies using npm or yarn:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

4. Start the development server:

   ```
   npm start
   ```

   or

   ```
   yarn start
   ```

   The application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. Open your web browser and go to [http://localhost:3000](http://localhost:3000).

2. You will see an input field where you can enter the name of the item you want to add to the shopping list.

3. Click the "Add" button to add the item to the list.

4. To edit an item, click the "Edit" button next to the item you want to edit. Make your changes and click the "Save" button to save the changes.

5. To check/uncheck an item, click the checkbox next to the item name.

6. Checked items can be deleted by clicking the "Delete" button in the "Checked Items" section.

7. Success and error messages will appear as toasts in the bottom right corner of the screen.

## Technologies Used

- React
- vite
- JavaScript
- CSS (Tailwind CSS)

## Project Structure

- `src/components/ShoppingList.js`: The main component that manages the shopping list functionality.
- `src/components/AddItem.js`: Component for adding items to the list.
- `src/components/Toasty.js`: Component for displaying toast notifications.


## Acknowledgments

This project was created as a simple demonstration of building a React application with basic CRUD (Create, Read, Update, Delete) operations and notification system.

Feel free to modify and expand upon it for your own needs or as a learning resource for React development. If you have any questions or feedback, please don't hesitate to reach out.

---

Happy shopping! 🛒✨
