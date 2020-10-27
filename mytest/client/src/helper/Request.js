class Request {
    get(url){
        return new Promise((resolve,reject)=> {
            let ajax = new XMLHttpRequest();
            ajax.open('GET', url);
            ajax.send();

            ajax.onreadystatechange = function(){
                
                if(ajax.readyState == 4){
                    if(ajax.status === 200){
                        resolve(ajax.responseText);
                    }

                    else{
                        reject(ajax.responseText);
                    }
                }
            }
        })
    }

    post(url,body){
        return new Promise((resolve,reject)=> {
            const ajax = new XMLHttpRequest();
            ajax.setRequestHeader('content-type', 'application/json');
            ajax.open('POST', url);
            ajax.send(body);

            ajax.onreadystatechange = function(){
                
                if(ajax.readyState == 4){
                    if(ajax.status === 200){
                        resolve(ajax.responseText);
                    }

                    else{
                        reject(ajax.responseText);
                    }
                }
            }
        })
    }
}

export default Request