import * as Crypto from "expo-crypto";
import bcrypt from "bcryptjs";

class PasswordUtil {

    private static fallback(bytesAmount: number) {
        const typedArray = new Uint8Array(bytesAmount);
            Crypto.getRandomValues(typedArray);
            return Array.from(typedArray);
    }

    public static hashPassword(password: string): string {
        bcrypt.setRandomFallback(this.fallback);
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        return hashedPassword;
    }

    public static isCorrectPassword(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash);
    }
}

export default PasswordUtil;