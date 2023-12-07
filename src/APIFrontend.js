export function getAllProducts(setProduct) {
    fetch("http://127.0.0.1:8081/api/get")
        .then((response) => response.json())
        .then((data) => {
            console.log("Show Catalog of Products :");
            console.log(data);
            setProduct(data);
        });
}

export function deleteOneProduct(deleteid,setProduct) {
    console.log("Product to delete :", deleteid);
    fetch("http://localhost:8081/api/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "id": deleteid }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Delete a product completed : ", deleteid);
            console.log(data);
            if (data) {
                const key = Object.keys(data);
                const value = Object.values(data);
                alert(key + value);
            }
        });
    //setChecked4(!checked4);
    getAllProducts(setProduct);
}

export function postMethod(addNewProduct) {
    console.log(addNewProduct);
    fetch("http://127.0.0.1:8081/api/post", {
    method: "POST",
    headers: addNewProduct
})
}
export function putMethod(Product,allProducts,setProducts){

}