var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fs from 'fs';
/**
 * Writes passed json object into passed filename
 *
 * @param {string} fileName - Set a filename to write to
 * @param {object} jsonObj - Any JSON object
 */
export const writeJsonFile = (fileName, jsonObj) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const jsonContent = JSON.stringify(jsonObj, null, '  ');
        const callback = (error) => {
            if (error) {
                reject('An error occured while writing JSON Object to File!');
            }
            resolve(true);
        };
        fs.writeFile(fileName, jsonContent, 'utf8', callback);
    });
});
