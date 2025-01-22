import { Sequelize, DataTypes, Op, sequelize } from "../database/dbConfig.js";

// import associations from "./associations/index.js";

import User from "./userModel.js";

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.DataTypes = DataTypes;
db.Op = Op;

db.User = User(sequelize, Sequelize, DataTypes);

associations(db);

export default db;