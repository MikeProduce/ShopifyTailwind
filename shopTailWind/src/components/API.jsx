import {useState,useEffect} from 'react'
import axios from 'axios';




export const API = (props) => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);


  useEffect(() => {
    async function fetchData() {
        try {
            setLoading(true);
            const response = await axios.get('https://api.escuelajs.co/api/v1/products');
            setData(response.data);
            console.log(response.data)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    fetchData();
}, []);


  if (loading) {
    return <p>Loading...</p>}
  if (error) {
    return <p>{error.message}</p>}

  


  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {data.map((product,key) => (
      <div key={product.id} href={product.description} className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.images}
            className="object-cover object-center hover:opacity-75 hover:scale-110"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.category.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
        <button  onClick={() => props.onDataFetched(product)} className='bg-gray-800 text-white p-2 rounded-md hover:bg-opacity-50'>Add to Cart</button>
      </div>
    ))}
  </div>
    )
}