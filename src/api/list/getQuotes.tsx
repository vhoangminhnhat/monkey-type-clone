"use client";
import api from '../index';
import PATHS from '../apiConfig';

const get_quotes = async (params: any) => {
    return await api.get(PATHS.QUOTES);
};
 export default{
    get_quotes
 }
