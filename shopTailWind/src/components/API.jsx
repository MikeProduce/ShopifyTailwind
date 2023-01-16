import {useState,useEffect} from 'react'
import axios from 'axios';




export const API = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.bluecartapi.com/request?api_key=CBB74B236EBA47FA9A1C76EAEE4C240D&search_term=Clothes&type=search')
    .then(response => {
      setData(response.data.search_results[0].product.title);
      setLoading(false);
      console.log(response.data.search_results[0].product.title);
    })
    .catch(error => {
      setError(error)
      setLoading(false);
    })
  },[])

  if (loading) {
    return <p>Loading...</p>}
  if (error) {
    return <p>{error.message}</p>}
  


  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {data.map((product, key) => (
      <div key="key">{product} </div>
      // <a key={product.id} href={product.href} className="group">
      //   <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      //     <img
      //       src={product.imageSrc}
      //       alt={product.imageAlt}
      //       className="h-full w-full object-cover object-center group-hover:opacity-75"
      //     />
      //   </div>
      //   <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      //   <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
      // </a>
    ))}
  </div>
    )
}