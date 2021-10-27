import Realm from "realm";
import { KEYS } from "../constants/keys";

let app;

// Returns the shared instance of the Realm app.
export function getRealmApp() {
    if (app === undefined) {
        const appId = KEYS.app_id; // Set Realm app ID here.
        const appConfig = {
            id: appId,
            timeout: 10000,
            app: {
                name: "default",
                version: "0",
            },
        };
        app = new Realm.App(appConfig);
    }
    return app;
}