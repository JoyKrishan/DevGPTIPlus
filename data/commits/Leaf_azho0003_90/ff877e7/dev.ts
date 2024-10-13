import AccountsManager from "./AccountsManager";
import Account from "../account/Account";

    public async fetchAccount(id: EmployeeID): Promise<Account | null> {
        const account = await AccountsManager.inst.getAccount(id);
        return account;
    }

    public async activateNewAccount(account: Account): Promise<boolean> {
        return AccountsManager.inst.newAccountCreated(account);
    }

    public async updateAccount(account: Account): Promise<boolean> {
        return AccountsManager.inst.updateAccount(account);
    }
