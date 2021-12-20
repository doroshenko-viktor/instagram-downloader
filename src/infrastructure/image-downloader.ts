import { Readable } from "stream";
import axios from "axios";

export const getStreamed = async (url: string): Promise<Readable> =>
    new Promise((resolve, reject) => axios.get<Readable>(url, { responseType: "stream" })
        .then(async (response) => {
            resolve(response.data);
        })
        .catch(error => reject(error))
    );
