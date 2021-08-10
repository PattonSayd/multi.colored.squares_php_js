
    const width = window.innerWidth;
    const height = window.innerHeight;


    document.querySelector('button').onclick = () => {

        var div = document.createElement('div')
        
        createSquares(40, 150);

        function createSquares(min, max) {

            const size = Math.floor(Math.random() * (max - min + 1)) + min;
            const x = Math.random() * (width - max - 2);
            const y = Math.random() * (height - max - 2);

            div.style.width = size + 'px';
            div.style.height = size + 'px';
            div.style.border = '3px solid rgba(59, 57, 57, .7)';
            div.style.background = '#' + Math.random().toString(16).slice(2, 8);
            div.style.position = 'absolute';
            div.style.top = y + 'px';
            div.style.left = x + 'px';
            div.setAttribute("onclick", "deleteSquare(this)");
            
            var id = Math.random().toString(36).substr(2, 5);

            insertAjax(id);
            addLocalStorage();
            
            
            function addLocalStorage() {
                
                var array = JSON.parse(localStorage.getItem("allKeys"));
                if (array == null) array = [];
                            
                var object = {
                    "tag": div.outerHTML,
                    "id": id,
                };

                localStorage.setItem("key", JSON.stringify(object));
                
                array.push(object);
                
                localStorage.setItem("allKeys", JSON.stringify(array));

                // JSON.parse(localStorage.getItem("allKeys"))

                document.getElementById('container').insertAdjacentHTML('beforeend', JSON.parse(localStorage.getItem("key")).tag);

                localStorage.removeItem('key');      
            };
        }
    }


document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('allKeys') != null) {
        var objects = JSON.parse(localStorage.getItem("allKeys"))

        for (let i = 0; i < objects.length; i++) {
            document.getElementById('container').insertAdjacentHTML('beforeend', objects[i].tag);
        }
    }
})


function deleteSquare(elem) {
    var objects = JSON.parse(localStorage.getItem("allKeys"))
    objects.forEach(function (item, index) {
        if(item.tag == elem.outerHTML){
            deleteAjax(item.id);
            objects.splice(index, 1);
            elem.remove();
            localStorage.setItem("allKeys", JSON.stringify(objects));
        }   
    })
    
    if (objects.length == 0) {
        localStorage.removeItem('allKeys');
    }
}




  