import { access_keys } from "./dataManagerKeys";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { cl } from "../utils/console";

export const DataManager = {
  
  async setAccessToken(token) {
    // cl("token settled ==>", token);
    return await AsyncStorage.setItem(access_keys.access_token, token);
  },
  async setFirstTime() {
    // cl("token settled ==>", firstTime);
    return await AsyncStorage.setItem(access_keys.userNew, 'first');
  },
  async getFirstTime() {
    return await AsyncStorage.getItem(access_keys.userNew);
  },
  async getAccessToken() {
    return await AsyncStorage.getItem(access_keys.access_token);
  },
  async getLanguage() {
    return await AsyncStorage.getItem(access_keys.lang);
  },
  async setLanguage(lang) {
    return await AsyncStorage.setItem(access_keys.lang, lang);
  },
  async deleteAccessToken() {
    return await AsyncStorage.removeItem(access_keys.access_token);
  },
  async setUserId(userId) {
    // cl("userId settled ==>", userId);
    return await AsyncStorage.setItem(access_keys.user_id, userId);
  },
  async getUserId() {
    return await AsyncStorage.getItem(access_keys.user_id);
  },
  async deleteUserId() {
    return await AsyncStorage.removeItem(access_keys.user_id);
  },
  async setCreateProfile(userType) {
    return await AsyncStorage.setItem(access_keys.userDetails, userType);
  },
  async getCreateProfile(userType) {
    // console.log("userType settled ==>", userType);
    return await AsyncStorage.getItem(access_keys.userDetails);
  },
  async setUserType(userType) {
    // console.log("userType settled ==>", userType);
    return await AsyncStorage.setItem(access_keys.user_type, userType);
  },
  async getUserType() {
    return await AsyncStorage.getItem(access_keys.user_type);
  },
  async setUser(userType) {
    // console.log("userType settled ==>", userType);
    return await AsyncStorage.setItem(access_keys.userDetails, userType);
  },
  async getUser() {
    return await AsyncStorage.getItem(access_keys.userDetails);
  },
  async setFilter(filterData) {
    // console.log("userType settled ==>", userType);
    return await AsyncStorage.setItem(access_keys.filter, filterData);
  },
  async getFilter() {
    return await AsyncStorage.getItem(access_keys.filter);
  },
  async removeFilter() {
    return await AsyncStorage.removeItem(access_keys.filter);
  },
  async setCred(data) {
    // console.log("userType settled ==>", userType);
    return await AsyncStorage.setItem(access_keys.userCred, data);
  },
  async getCred() {
    return await AsyncStorage.getItem(access_keys.userCred);
  },
  async removeCred() {
    return await AsyncStorage.removeItem(access_keys.userCred);
  },
  async deleteUserType() {
    return await AsyncStorage.removeItem(access_keys.user_type);
  },
  async multiRemoveData(data){
    return await AsyncStorage.multiRemove(data);
  },
  async clear()
  {
    return await AsyncStorage.clear();
  }
};
