/* eslint-disable no-console */
/* eslint-disable no-async-promise-executor */
import EncryptedStorage from "react-native-encrypted-storage";

export const getLocalData = async (key) => {
    try {
        const jsonValue = await EncryptedStorage.getItem(key);
        let val = "";
        if (jsonValue) {
            try {
                return JSON.parse(jsonValue);
            } catch (err) {
                return jsonValue;
            }
        }
    } catch (error) {
        return null;
    }
};

export const setLocalData = async (key, value) => {
    try {
        await EncryptedStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        return Promise.reject(error);
    }
};

// export const cacheFilePaths = async (fileProps, key) => {
//   /**
//    * This function cache File Paths to localstorage
//    * [
//    *  {name: '12f', url: 'file://...'}
//    * ]
//    */
//   const data = JSON.parse(await EncryptedStorage.getItem(key));
//   if (data) {
//     await EncryptedStorage.setItem(
//       key,
//       JSON.stringify({ data: [...data.data, fileProps] })
//     );
//   } else {
//     await EncryptedStorage.setItem(key, JSON.stringify({ data: [fileProps] }));
//   }
//   return true;
// };

export const getFilePaths = async (key) => {
    /**
     * This function get File Paths from localstorage
     * @return [
     *  {name: '12f', url: 'file://...'}
     * ]
     */
    const files = await EncryptedStorage.getItem(key);
    if (files && files.length) {
        return JSON.parse(files).data;
    }
    return [];
};

export const flushLocalData = async (key) => {
    try {
        await EncryptedStorage.removeItem(key);
        return true;
    } catch (err) {
        return false;
    }
};
