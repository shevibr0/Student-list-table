export const checkQueryString = () => {
  console.log(window.location.search);
  const params = new URLSearchParams(window.location.search);
  if (params.get("s")) {
    doApi(params.get("s"));
  } else {
    doApi("javascript");
  }
};
export const doApi = async (search) => {
    let url = `https://v2.jokeapi.dev/joke/Any?contains=${search}`;
    let resp = await axios.get(url);
    console.log(resp.data);
    upDateInfo(resp.data);
    addQueryToUrl(search)
  };

const addQueryToUrl=(search)=>{
let params=new URL(window.location.href)
params.searchParams.set("s",search)
history.pushState(null,'',params)
}
const upDateInfo = (info) => {
  document.querySelector("#id_category").innerHTML = info.category;
  if (info.setup) {
    document.querySelector("#id_info").innerHTML += `
    <p class="h4">Setup:${info.setup}</p>
        <p class="h5">Delivery:${info.delivery}</p>
      </div> 
    `;
  } else if (info.joke) {
    document.querySelector("#id_info").innerHTML += `
        <p class="h4">joke:${info.joke}</p>
 `
  }
  else if(info.error){
    document.querySelector("#id_info").innerHTML =`
    <p class="h4">joke is not found</p>
    ` 
  }
};
