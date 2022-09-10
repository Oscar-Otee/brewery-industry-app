import React from 'react'


function CreateRetail({handleNewRetail}){
    function handleAddRetail(e){
        e.preventDefault()
        const retail = {
            retail_name : e.target[0].value
        }
        e.target.reset()
        
        fetch("http://localhost:9292/retails",{
            method: "POST",
            headers:{
                "content-type" : "application/json",
                "accept" : "application/json"
            },
            body: JSON.stringify(retail)
        })
        .then(resp => resp.json())
        .then(resp => handleNewRetail(resp))
    }

    
    return(
        <div>
            <h1> Create A Retail</h1>
            <form onSubmit={handleAddRetail}>
            <label> Retail Name: </label>
                <input type='text' name="retailName" placeholder='Retail Name'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}
export default CreateRetail