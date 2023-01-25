import axios from 'axios'
import React, { useState, useEffect } from 'react'
import "./Read.css"
import Pagination from './Pagination'

const Read = () => {
  const [data, setData] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const [postsPerpage] = useState(4)


  function getData() {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        // console.log(res.data.products);
        setData(res.data.products)
      })
  }
  useEffect(() => {
    getData()
  }, [data])

const indexOfLastPost = currentPage * postsPerpage;
const indexOfFirstPost = indexOfLastPost - postsPerpage;
const currentPost = data.slice(indexOfFirstPost,indexOfLastPost)


// change page
const paginate =(pageNumber)=>setcurrentPage(pageNumber)


  return (
    <>
    <div className='container w-50'>
    <table className="table table-bordered" >
        <thead>
          <tr className='table-striped'>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">description</th>
            <th scope="col">discountPercentage</th>
            <th scope="col">rating</th>
            <th scope="col">stock</th>
            <th scope="col">brand</th>
            <th scope="col">thumbnail</th>
            <th scope="col">images</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td><input type="text" className='form-control' placeholder='search product ...' /></td> */}
          </tr>
        {
          currentPost.map((e,id) => {
            return (
             
               
                  <tr key={id} className='table-striped'>
                    <th >{e.id}</th>
                    <td>{e.title}</td>
                    <td>{e.description}</td>
                    <td>{e.discountPercentage}</td>
                    <td>{e.rating}</td>
                    <td>{e.stock}</td>
                    <td>{e.brand}</td>
                    <td>

                      {<img src={e.thumbnail} />}
                    </td>
                    <td>
                    {e.images.map ((img,id)=>
                      <img src={img} key={id}/>
                    )}
                    </td>
                    
                    <td>  <button className='btn-success'>Edit</button></td>
                  </tr>

                
             
            )
          })
        }
        </tbody>
      </table>
      <Pagination postsPerPage={postsPerpage} totalPosts={data.length} paginate={paginate}/>
    </div>
   
      
    </>
  )
}

export default Read
