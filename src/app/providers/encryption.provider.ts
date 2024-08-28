import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class EncryptionProvider {
    // ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Must be 256 bytes (32 characters), and will br replaced by user pword/pin
    // IV_LENGTH = 16; // For AES, this is always 16

    // from userprefs
    key = 'secret key';

    constructor() { }

    decrypt(encryptedText) {
        if (encryptedText !== undefined && encryptedText !== null) {
            const decrypted = CryptoJS.AES.decrypt(encryptedText, this.key);
            return decrypted.toString(CryptoJS.enc.Utf8);
        }
    }

    encrypt(text) {
        if (text !== undefined && text !== null) {
            const encrypted = CryptoJS.AES.encrypt(text, this.key);
            return encrypted.toString();
        }
    }

    decryptDocs(docs) {
        for (let i = 0; i < docs.length; i++) {
            docs[i].data = JSON.parse(this.decrypt(docs[i].data));
        }

        return docs;
    }

}
