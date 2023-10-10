import api from "..";
import PATHS from "../apiConfig";

const get_words = async (params: any) => {
    return await api.get(PATHS.WORDS);
};

export default {
    get_words
}