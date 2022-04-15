import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const CRUD = (props) => {

//CREATE 
    const url = ''

    const [data, setData] = useState({
        title: '',
        content: ''
    })
    const createPost = async (e) => {
        e.preventDefault()
        await axios.post(url, {
            title: data.title,
            content: data.content
        })
    }
    const onChange = (e) => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        window.location.reload(true)
    }

//UPDATE
    const updatePost = async (e) => {
        e.preventDefault()
        await axios.put('')
        window.location.reload(true)
    }

//DELETE
    const deletePost = async (e) => {
        e.preventDefault()
        await axios.delete('')
        window.location.reload(true)
    }

    return(
        <div>

        </div>
    )
}

export default CRUD