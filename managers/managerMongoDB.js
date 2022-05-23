import {
    MongoClient
} from 'mongodb';
const url = 'mongodb+srv://slovedeep:4214@cluster0.xj3oq.mongodb.net/test'; //TODO: pasar al constante de .env;
const dbName = 'movies';//TODO: pasar al constante de .env
class ManagerMongoDB {
    
    constructor(url, dbName) {
        this.url = url;
        this.client = new MongoClient(url, {
            useNewUrlParser: true
        });
        this.dbName = dbName; 
    }

    async getConection() {
        try {
            await this.client.connect();
            const db = this.client.db(this.dbName);
            return db.collection('media');
        } catch (error) {
            this.closeConection();
            throw error;
        }
        
    }

    async closeConection() {
        await this.client.close();
    }

    async getMovies() {
        try {
            const collection = await this.getConection();
            const result = await collection.find()
                .toArray();
            return result
        } catch (error) {
            throw error;
        } finally {
            this.closeConection();
        }
    }

    async getMoviesById(id){
        try {
            const collection = await this.getConection();
            const result = await collection.find({id:parseInt(id)})
                .toArray();
            return result
        } catch (error) {
            throw error;
        } finally {
            this.closeConection();
        }
    }

    async RemoveMovieById(id){
        try {
            const collection = await this.getConection();
            const result = await collection.deleteOne({id:parseInt(id)});
            return result;
        } catch (error) {
            throw error;
        } finally {
            this.closeConection();
        }
    }

    async UpdateMovie(req){
        try {
            const collection = await this.getConection();
            const result = await collection.updateOne({id:parseInt(req.id)},{$set:req});
            return result;
        } catch (error) {
            throw error;
        } finally {
            this.closeConection();
        }
    }

    async addMovie(req){
        try {
            const collection = await this.getConection();
            const result = await collection.insertOne(req);
            return result;
        } catch (error) {
            throw error;
        } finally {
            this.closeConection();
        }
    }

}


export default new ManagerMongoDB(url, dbName)