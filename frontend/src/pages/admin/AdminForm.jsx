import React, { useEffect, useRef, useState } from 'react'
import Classes from './AdminForm.module.css'
const AdminForm = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    const descRef = useRef();
    const imgRef = useRef();
    const unameRef = useRef();
    const upriceRef = useRef();
    const uquantityRef = useRef();
    const udescRef = useRef();
    const uimgRef = useRef();
    const [items, setitems] = useState([]);
    const [clicked, setclicked] = useState(false);
    const [updateClicked, setupdateClicked] = useState(false);
    const [id, setid] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const obj = {
            productName: nameRef.current.value,
            price: priceRef.current.value,
            quantity: quantityRef.current.value,
            desc: descRef.current.value,
            img: imgRef.current.value
        }
        console.log(obj)
        const response = await fetch('https://e-commerce-full-stack-livid.vercel.app/api/posts/createPost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                productName: nameRef.current.value,
                price: priceRef.current.value,
                quantity: quantityRef.current.value,
                desc: descRef.current.value,
                img: imgRef.current.value
            })
        })
        const data = await response.json();
        console.log(data);
        setclicked(!clicked)

    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://e-commerce-full-stack-livid.vercel.app/api/posts/');
            const data = await response.json();
            console.log(data.post);
            setitems(data.post);
        }
        fetchData();
    }, [clicked]);
    console.log("items", items)

    const handleDelete = async (id) => {

        console.log(id)
        const response = await fetch(`https://e-commerce-full-stack-livid.vercel.app/api/posts/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        const result = await response.json();
        console.log(result);
        setclicked(!clicked)
    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://e-commerce-full-stack-livid.vercel.app/api/posts/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                productName: unameRef.current.value,
                price: upriceRef.current.value,
                quantity: uquantityRef.current.value,
                desc: udescRef.current.value,
                img: uimgRef.current.value
            })
        })
        const result = await response.json();
        console.log(result)
        console.log(id)
        setclicked(!clicked)
        setupdateClicked(!updateClicked)
    }
    const handleEdit = async (id) => {

        setid(id);
        setupdateClicked(!updateClicked)
    }

    const handleClose = (e) => {
        e.preventDefault();
        setupdateClicked(!updateClicked);
    }

    return (
        <div className={Classes.adminForm}>
            <form action="" onSubmit={handleSubmit}>
                <center><h2 className='mb-3'>Add Product</h2></center>
                <label htmlFor="">Product Name: </label>
                <input type="text" ref={nameRef} />
                <label htmlFor="">Price</label>
                <input type="number" ref={priceRef} />
                <label htmlFor="">Quantity</label>
                <input type="number" ref={quantityRef} />
                <label htmlFor="">Desciption</label>
                <input type="text" ref={descRef} />
                <label htmlFor="">Image Link</label>
                <input type="text" ref={imgRef} />
                <button type='submit' className='btn btn-success mt-2'>submit</button>
            </form>


            <div className={Classes.products}>
                {items.map((item) => {
                    return <div key={item._id} className={`${Classes.productContainer} card`} style={{ width: "18rem" }}>
                        <img src={item.img} className="card-img-top" style={{ height: "18rem" }} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.productName}</h5>
                            <p className="card-text">Price: {item.price}</p>
                            <p className="card-text">Quantity: {item.quantity}</p>
                            <p className="card-text">Desctiption: {item.desc}</p>
                            <button className="btn btn-danger" onClick={() => { handleDelete(item._id) }}>Delete Product</button>
                            <button className="btn btn-primary " style={{ marginLeft: "10px" }} onClick={() => { handleEdit(item._id) }}>Edit Product</button>
                        </div>
                    </div>
                })}
            </div>
            {updateClicked && <form action="" className={Classes.updateForm} onSubmit={handleUpdate}>
                <center><h2>Update Product  <i onClick={handleClose} className='fas fa-close btn btn-primary' style={{ position: "absolute", top: "20px", right: "20px" }}></i></h2></center>
                <label htmlFor="">Product Name: </label>
                <input type="text" ref={unameRef} />
                <label htmlFor="">Price</label>
                <input type="number" ref={upriceRef} />
                <label htmlFor="">Quantity</label>
                <input type="number" ref={uquantityRef} />
                <label htmlFor="">Description : </label>
                <input type="text" ref={udescRef} />
                <label htmlFor="">Image Link</label>
                <input type="text" ref={uimgRef} />
                <button type='submit' className='btn btn-primary'>Submit</button>

            </form>}

        </div>
    )
}

export default AdminForm
