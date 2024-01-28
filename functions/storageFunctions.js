import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveAsyncStorage = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    return error;
  }
};

export const getAsyncStorage = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    return error;
  }
};

export const removeAsyncStorage = async (key) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    return error;
  }
};

export const clearAsyncStorage = async () => {
  try {
    let keys = await AsyncStorage.getAllKeys();
    keys = keys.filter((k) => k !== "savedLeagues");
    return await AsyncStorage.multiRemove(keys);
  } catch (error) {
    return error;
  }
};
