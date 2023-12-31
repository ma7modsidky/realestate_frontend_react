import axios from "axios";
import dayjs from "dayjs";
import {toast} from "react-toastify"

export const api = axios.create({
    baseURL: 'http://localhost:8000/api',

})

export const getAllProperties = async () => {
    console.log('API','Getting all properties')
    try {
        const response = await api.get("/property", {
            timeout: 10*1000,
        })
        if (response.status === 400 || response.status === 500){
            throw response.data
        }
        return response.data
    } catch (error) {
        toast.error("something went wrong" + " " + "Couldn't get all properties")
        throw error
    }
};

export const getProperty = async (id) => {
    console.log('API','getting single property')
    try {
        const response = await api.get(`/property/${id}`, {
            timeout: 10*1000,
        })
        if (response.status === 400 || response.status === 500){
            throw response.data
        }
        return response.data
    } catch (error) {
        toast.error("something went wrong" + `Couldn't get single property with Id ${id}`)
        throw error
    }
}

export const createUser = async (email,token) => {
    try {
        await api.post(`/user/register`, {email}, {
            headers: { 'Authorization': 'Bearer '+token}
        })
        
    } catch (error) {
        toast.error("Something went wrong, please try again later")
        throw error
    }
}

export const bookVisit = async (date, propertyId, email, token) => {
    try {
        await api.post(`user/bookVisit/${propertyId}`,{
            email,
            id:propertyId,
            date: dayjs(date).format('DD/MM/YYYY'),

        }, {headers: { 'Authorization': 'Bearer '+token} })
    } catch (error) {
        toast.error("Something went wrong, please try again later")
        throw error
    }
}