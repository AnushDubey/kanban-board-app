# Kanban Board Application
This project is an interactive Kanban board application developed using React JS, designed to manage and visualize tickets in a Kanban board format. The application provides various features for grouping and sorting tickets based on different parameters, enhancing user experience and efficiency. It fetches data from this [API](https://api.quicksell.co/v1/internal/frontend-assignment).


## Features
* Interactive Kanban board application built using React JS.
* Dynamic grouping options for tickets based on Status, User, and Priority.
* Sorting functionality for tickets based on Priority and Title.
* Persistence of user's view state even after page reload for enhanced user experience.

## Grouping Options
The application allows users to group tickets in the following ways:

* **By Status**: Tickets can be organized based on their current status.
* **By User**: Tickets can be grouped according to the assigned user.
* **By Priority**: Tickets can be grouped based on their priority level.

## Sorting Options
The application provides sorting options for tickets:

* **Priority**: Arrange tickets in descending order of priority.
* **Title**: Sort tickets in ascending order based on their title.

## Priority Levels
The application recognizes the following priority levels for the tickets:

* Urgent (Priority level 4)
* High (Priority level 3)
* Medium (Priority level 2)
* Low (Priority level 1)
* No priority (Priority level 0)
