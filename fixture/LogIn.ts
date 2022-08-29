import {test as base} from "@playwright/test";
import { Dashboard } from "../page/Dashboard";
import { Login } from "../page/Login";
const test = base.extend <{dashboard: Dashboard}> ({
        dashboard: async ({page}, use)  => {
        let login:Login
        let dashboard:Dashboard
        login = new Login('phuongthuy0212.onshopbase.com/admin', page);
        dashboard = await login.logIn({email: 'phuongthuy021296@gmail.com', password: 'Thuy0212@'});
        use (dashboard)
    }
    })

export default test;