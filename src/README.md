### Folder structure explain [WIP]

---
`assets`: contains all resources

|___`fonts`: font files

|___`images`: image files

---
`scripts`: contains all `.js` files

|___`containers`: contains wrapper components

|___`components`: contains globally reusable components, these components can be reused in pages and modules, each has its own `actions`, `action-types` and `reducers`

|___`modules`: contains big, standalone components to construct pages, each has its own `actions`, `action-types` and `reducers`. All modules's reducers are then combined into one rootReducers

|___`pages`: contains pages

|___`utils`: contains helper functions

---
`styles`: contains all stylesheets

---
### Naming [WIP]
- `modules`: 'Module' + 'ModuleName'.js
- `components`: 'ComponentName'.js
- `actions:`: 'actionName'
- `reducers:`: 'reducerName'

---
### How this helps [WIP]
- Developing each `modules` and `components` is less confusing, because we just has to make change to the folder that containing it
