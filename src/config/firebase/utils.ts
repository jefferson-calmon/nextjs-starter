import * as database from 'firebase/database';
import * as storage from 'firebase/storage';

import { Storage, Database } from ".";

export const dbRef = (path: string) => database.ref(Database, path);

export const storageRef = (path: string) => storage.ref(Storage, path);

export const dbQuery = (...paths: string[]) => {
    const path = paths.join('/');
    const ref = dbRef(path);

    return {
        get: () => database.get(ref),
        set: (value: any) => database.set(ref, value),
        update: (values: object) => database.update(ref, values),
    }
}
