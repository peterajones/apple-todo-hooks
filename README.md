## Apple style Todo List in React

The inspiration for this project came from a code challenge. As you can see from the image below, there is an input field and a submit button 'Add'.

After typing in a 'title' for your todo item and submitting the form, your item will show up in the list of todos in the order that they are added. Clicking on a todo item will put a line through the item indicating that it has been completed.

There is also a line of text under the form which dynamically keeps track of the number of tasks and how many are remaining to be completed.

![](images/sample.png)

It's *very* simple and I thought I could make this a lot better adding some styling and additional functionality similar to Apple's Reminders app.

Starting from the top of the app, the number of uncompleted todos is to the right of the list name. The list name is editable by clicking on it (it default to TODO LIST).

The input field for adding a todo has been styled to remove the default borders and the submit button has been styled to mimic the Apple app.

After you add a couple of todos, they will appear below the input field in the order they were added with the newest todo on the top of the list.

Clicking on a todo item will remove it from the list but the completed items are still accessible by clicking on the 'Show Completed' link below the list. The completed items now have a green indicator to the left of the item name to differentiate them from the uncompleted items. There is also a red 'delete' icon on the right side of the completed item. Deleteing a todo item will remove it from localStorage. Clicking on a completed item will mark it as not completed - the green indicator is removed as is the delete icon.

The 'Show Completed' link has now changed to 'Hide Completed' which upon clicking will hide all of the completed items showing only the uncompleted todo items.


## How to get started

In the project directory, you can run:

### `npm install` - this installs the project's dependencies

Now you can run:

### `npm start`

This will run the app in development mode.<br>
Open [http://localhost:5678](http://localhost:5678) to view the app in the browser.

