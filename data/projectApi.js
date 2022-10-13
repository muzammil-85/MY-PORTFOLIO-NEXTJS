
let getproj = ()=> {
    var data;
    fetch("http://127.0.0.1:8000/api/projects/")
    .then(response => response.json())
    .then(proj => {
        console.log(proj);
    }
    );


}
export default getproj;