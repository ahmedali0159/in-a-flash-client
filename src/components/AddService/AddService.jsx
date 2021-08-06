import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './AddService.css'

export default function AddService() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageUrl] = useState(null)

  const onSubmit = (data) =>{
    const eventData = {
      name:data.title,
      imageURL: imageURL,
      discription: data.discription,
      price: data.price
    };
     const url = (`http://localhost:5000/addservice`);
     console.log(eventData);
     fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
      
     })
     .then(res => console.log('server side response', res));
     
  };

  const handleImageUpload = event => {
    const imageData = new FormData();
    imageData.set('key', '2fe3314a2f7addd3a2ccb60181f3f015')
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData )
    .then(function (response) {
      setImageUrl(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className="main">
      <h1 className="text-center mb-5">Add Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          name="name"
          placeholder="Enter a Title"
          {...register("title")}
        />
        <br/>
        <input
          className="form-control"
          name="price"
          placeholder="Enter a Price"
          {...register("price")}
        />
        <br />
        <textarea
          className="form-control"
          rows="3"
          name="discription"
          placeholder="Enter a Discription"
          {...register("discription")}
        />
        <br />
        <input
          className="form-control"
          name="exampleRequired"
          type="file"
          placeholder="Add Image"
          onChange={handleImageUpload}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <br />
        <input className="btn btn-rounded" style={{background:'#5352ed', border:'1px solid #5352ed', color:'black'}} value="Submit" type="submit" />
      </form>
    </div>
  );
}