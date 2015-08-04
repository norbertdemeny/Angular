window.hello = 'world';
        var fileData = [{
    type: 'dir',
    name: 'app',
    children: [{
        type: 'file',
        name: 'index.html'
    }, {
        type: 'dir',
        name: 'js',
        children: [{
            type: 'file',
            name: 'main.js'
        }, {
            type: 'file',
            name: 'app.js'
        }, {
            type: 'file',
            name: 'misc.js'
        }, {
            type: 'dir',
            name: 'vendor',
            children: [{
                type: 'file',
                name: 'jquery.js'
            }, {
                type: 'file',
                name: 'underscore.js'
            }]
        }]
    },
        {
            type: 'dir',
            name: 'css',
            children: [{
                type: 'file',
                name: 'reset.css'
            }, {
                type: 'file',
                name: 'main.css'
            }]
        }]
}];
        //var create= function(arr1,place1){
 //       if (arr1.length > 0){
   //     for (var i=0; i<arr1.length; i++){
     //       var ul=document.createElement('ul');
     //       var test=document.getElementById('place1');
    //test.appendChild(ul);
    //var li=document.createElement('li');
    //li.setAttribute("id", arr1[i].name);
    //ul.appendChild(li);
    //li.innerHTML= arr1[i].name;}}
    //}

        function setIcon(dataType, elem){
            if (dataType === 'dir'){
                elem.setAttribute('class', 'mdi mdi-folder');
            }else{
                elem.setAttribute('class', 'mdi mdi-file-outline');
            }
        }
       // var test=document.getElementById('tree');
       // var li=document.createElement('li');

        function makeList(arr, place) {
            var ul=document.createElement('ul');
            var test=document.getElementById(place);

            test.appendChild(ul);
            if(arr.length > 0){
                for (var i=0; i<arr.length; i++){
                    var li=document.createElement('li');
                    li.setAttribute("id", arr[i].name);
                    ul.appendChild(li);
                    li.innerHTML= arr[i].name;
                    if(arr[i].type === 'dir'){
                        makeList(arr[i].children,arr[i].name);
                    }
                    setIcon(arr[i].type,li);
                }
            }
            else {
                var li=document.createElement('li');
                ul.appendChild(li);
                li.innerHTML= arr.name;
            }
        }

function search(arr) {

    var find = document.getElementById("find").value;
    if(arr.length > 0){
        for (var i=0; i<arr.length; i++){
            if(arr[i].name.indexOf(find) >= 0){
                document.getElementById('tree').innerHTML = "";
                var ul=document.createElement('ul');
                var test=document.getElementById('tree');
                test.appendChild(ul);
                var li=document.createElement('li');
                li.setAttribute("id", arr[i].name);
                ul.appendChild(li);
                li.innerHTML= arr[i].name;
                setIcon(arr[i].type,li);
                makeList(arr[i].children,arr[i].name);

            }
            else{
                if(arr[i].type === 'dir'){
                    search(arr[i].children,find);


                }
            }

        }
    }
    else {
        if(arr.name.indexOf(find) >= 0){


        }
    }
}
makeList(fileData,'tree');

