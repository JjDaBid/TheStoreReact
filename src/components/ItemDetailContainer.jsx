import { Link } from "react-router-dom"
import CardProduct from "./CardProduct"

/* eslint-disable react/prop-types */
const ItemDetailContainer = ({data}) => {
  console.log("Data en ItemDetailContainerÑ ", data)
  

  return (
    <>
      <Link to={`/item/${data.id}`}>
        <CardProduct data={data}/>
       </Link>
    </>
  )
}
export default ItemDetailContainer
