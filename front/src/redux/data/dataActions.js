import { GETDATA } from "./dataTypes";
import axios from 'axios'

export const getList = ()=>{
    return axios({
        method:'get',
        headers: { 'Content-Type': 'application/json', 'Content-Length' : 225 },
        url:"http://localhost:8000/list",
    })

}

export const listing1 = (data) =>{
    return{
        type:GETDATA,
        payload:data
    }

}

export const updateList=(data)=>{
    return axios({
        method:'put',
        headers: { 'Content-Type': 'application/json'},
        url:`http://localhost:8000/updateData/${data.id}`,
        data:{firstName:data.firstName,lastName:data.lastName,email:data.email}
    })
}

export const addDataInList=(data)=>{
    return axios({
        method:'post',
        headers: { 'Content-Type': 'application/json' },
        url:'http://localhost:8000/addData',
        data:data
    })
}

export const deleteData=(id)=>{
return axios({
    method:'delete',
    url:`http://localhost:8000/delete/${id}`
})
}