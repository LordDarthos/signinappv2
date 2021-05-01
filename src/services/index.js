import axios from 'axios';

const baseUrl = "https://young-wildwood-47002.herokuapp.com";

export async function getUserSession () {
    try {
        const response = await axios({
            url: `${baseUrl}/users/signin`,
            method: 'GET' 
        })
        console.log("RESPONSE USERS",response)
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function getNotes (productParam) {
    try {
        const response = await axios({
            url: `${baseUrl}/notes/${productParam}`,
            method: 'GET'
        })
        console.log(response)
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function saveNote (productData, productId) {
    try {
        const formData = new FormData()
        formData.append('title', productData.title)
        formData.append('description', productData.description)
        formData.append('id', productId)
        console.log(productData)
        console.log(formData)
        const response = await axios({
            url: `${baseUrl}/notes/new-note`,
            method: 'POST',
            data: formData
        })
        console.log(response)
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function deleteNote (productData) { 
    try {
        const response = await axios({
            url: `${baseUrl}/notes/delete-note/${productData}`,
            method: 'DELETE',
        })
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function editNote (productData, productBody) { 
    try {
        const response = await axios({
            url: `${baseUrl}/notes/edit-note/${productData.id}`,
            method: 'PATCH',
            data: productBody,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await console.log(response)
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function saveUser (productData) {
    try {
        const formData = new FormData()
        formData.append('name', productData.name)
        formData.append('email', productData.email)
        formData.append('password', productData.password)
        formData.append('confirm_password', productData.confirm_password)
        console.log(productData)
        console.log(formData)
        const response = await axios({
            url: `${baseUrl}/users/signup`,
            method: 'POST',
            data: formData,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function loginUser (productData) {
    try {
        const formData = new FormData()
        // formData.append('name', productData.name)
        formData.append('email', productData.email)
        formData.append('password', productData.password)
        // formData.append('confirm_password', productData.confirm_password)
        // console.log("PRODUCT DATA",productData)
        // console.log(formData)
        const response = await axios({
            url: `${baseUrl}/users/signin`,
            method: 'POST',
            data: productData,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("LOGIN USER",response)
        
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function logoutUser () {
    try {
        // const formData = new FormData()
        // formData.append('name', productData.name)
        // formData.append('email', productData.email)
        // formData.append('password', productData.password)
        // formData.append('confirm_password', productData.confirm_password)
        // console.log("PRODUCT DATA",productData)
        // console.log(formData)
        const response = await axios({
            url: `${baseUrl}/users/signout`,
            method: 'GET'
        })
        console.log("LOGOUT USER",response)
        
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function updateProducts (productData, productBody) { 
    try {
        console.log(productData, productBody)

        const response = await axios({
            url: `${baseUrl}/products/${productData.id}`,
            method: 'PATCH',
            data: productBody,
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function updateProductsImg (productData, productBody) { 
    try {
        console.log(productData, productBody)

        const formData = new FormData()

        formData.append('image', productBody.image)
        console.log(formData)

        const response = await axios({
            url: `${baseUrl}/products/${productData.id}`,
            method: 'POST',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            
        })
        return response
    } catch (err) {
        console.log(err)
    }
}