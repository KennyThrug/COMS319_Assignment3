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
    let b = JSON.stringify({ id: deleteid });
    console.log(b);
    fetch("http://localhost:8081/api/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: b,
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
    console.log("test");
    //setChecked4(!checked4);
}

export function postMethod(addNewProduct) {
    console.log(addNewProduct);
    fetch("http://127.0.0.1:8081/api/post", {
    method: "POST",
    headers: {"Content-Type:": "application/json"},
    body: addNewProduct
})
}
export function putMethod(Product,allProducts,setProducts){
    console.log(Product);
    fetch("http://127.0.0.1:8081/api/update",{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Product)
    });
}