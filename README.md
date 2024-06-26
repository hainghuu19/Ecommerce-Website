
# How to run project
- Run `npm i` to install all dependencies for project
- Run `npm start` to run project at `localhost:8000`


# Project technologies
- Using `NodeJS (ExpressJS)` for BE
- Using `JavaSript, Pug, Bootstrap v4` for FE
- Using `MongoDB , Mongoose` for Database
- Using MVC model

# Project Structure
## FE
- `./views` contain .pug files for UI
- `./public/css` contain css file for UI
- `./public/js` contain javascript file for Front-End
- `./public/laptop` contain image used in UI

## BE
- `./models` contain database schema
- `./data` contain data in JSON file and command to import to database
- `./routes` define route for web
- `./controllers` contain controllers to handle logic between BE and database
- `./utils` contain utilities 

## Database
- `./data/laptop.json`: contains all data of laptop in JSON format
- `./data/store.json`: contains all data of store in JSON format
- `./data/importData.mjs`: contains code to import laptop data from JSON file to MongoDB database
- Run `npm import-laptop` at `root` folder to clear laptop data in database and import new laptop data from `laptop.json` to database


