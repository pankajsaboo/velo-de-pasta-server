import mongodb from "./mongodb";
import { buildInsertObject, buildUpdateObject } from "./user-audit";

export class DatabaseService {

    async getAll(collectionName) {
        try {
            const db = mongodb.getDB();
            let result = await db.db().collection(collectionName).find().toArray();
            return result;
        } catch (err) {
            throw err;
        }
    }

    async getOne(collectionName, id) {
        try {
            const db = mongodb.getDB();
            let result = await db.db().collection(collectionName).findOne({
                "_id": id
            });
            return result;
        } catch (err) {
            throw err;
        }
    }

    // save document to collection
    async save(collectionName, data) {
        try {
            const db = mongodb.getDB();
            let result = await db.db().collection(collectionName).insertOne(buildInsertObject(data));
            return result;
        } catch (err) {
            throw err;
        }
    }

    // update one collection 
    // TODO rename as Replace One
    async updateOne(collectionName, data) {
        try {
            const db = mongodb.getDB();
            let result = await db.db().collection(collectionName).updateOne({ "_id": data._id }, { $set: buildUpdateObject(data) }, { upsert: false });
            return result;
        } catch (err) {
            throw err;
        }
    }

    // Delete One collection
    async deleteOne(collectionName, id) {
        try {
            const db = mongodb.getDB();
            let result = await db.db().collection(collectionName).deleteOne({ "_id": id });
            return result;
        } catch (err) {
            throw err;
        }
    }

    // Delete One collection
    async deleteMany(collectionName, criteria) {
        try {
            const db = mongodb.getDB();
            let result = await db.db().collection(collectionName).deleteMany(criteria);
            return result;
        } catch (err) {
            throw err;
        }
    }

    async findByCriteria(collectionName, criteria, projection) {
        try{
            const db = mongodb.getDB();
            let result = await db.db().collection(collectionName).find(criteria).project(projection).toArray();
            return result;
        } catch(err) {
            throw err;
        }
    }
}



