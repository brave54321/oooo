import mongoose from 'mongoose';

let dacPortalHost = process.env.NODE_ENV === 'prod' ? process.env.MONGO_HOST_DAC_PORTAL : process.env.MONGO_HOST_DAC_PORTAL_TEST;
let permissionsHost = process.env.NODE_ENV === 'prod' ? process.env.MONGO_HOST_PERMISSIONS_API : process.env.MONGO_HOST_PERMISSIONS_API_TEST;
let dacPortalDB = process.env.MONGO_DB_DAC_PORTAL;
let permissionsDB = process.env.MONGO_DB_PERMISSIONS_API;
let username = process.env.MONGO_USER;
let password = process.env.MONGO_PASS;
let authSource = process.env.MONGO_AUTH;
let dacPortalDBUri = process.env.NODE_ENV === 'prod' ? `mongodb://${username}:${password}@${dacPortalHost}/${dacPortalDB}?authSource=${authSource}` :
      `mongodb://${username}:${password}@${dacPortalHost}/${dacPortalDB}?connectTimeoutMS=300000&replicaSet=rs0&authSource=${authSource}`
let permissionsDBUri = process.env.NODE_ENV === 'prod' ? `mongodb://${username}:${password}@${permissionsHost}/${permissionsDB}?authSource=${authSource}` :
      `mongodb://${username}:${password}@${permissionsHost}/${permissionsDB}?connectTimeoutMS=300000&replicaSet=rs0&authSource=${authSource}`

const connectToDACPortalDB = () => {
  try {
    console.log("Connected to the DAC-Portal-DB")
    return mongoose.createConnection(dacPortalDBUri)
  } catch (e) {
    console.error("Database connection failed:", e);
  }
}

const connectToPermissionsDB = () => {
  try {
    console.log("Connected to the Permissions-API-DB")
    return mongoose.createConnection(permissionsDBUri);
  } catch (e) {
    console.error("Database connection failed:", e);
  }
} 

const dacPortalDBConnection = connectToDACPortalDB(dacPortalDBUri);
const permissionsDBConnection = connectToPermissionsDB(permissionsDBUri);

export { dacPortalDBConnection, permissionsDBConnection }