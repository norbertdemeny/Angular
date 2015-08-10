function App() {
}

App.constants = {
    classes: {
        folder: 'mdi mdi-folder',
        file: 'mdi mdi-file-outline'
    }
};

App.prototype.events = new Events();

App.prototype.handleKeyup = function (event) {
    this.search(this.data, event.target.value);
};

App.prototype.enableListeners = function () {
    this.events.on(this.input, 'keyup', this.handleKeyup.bind(this));
};

App.prototype.initialize = function (spec) {
    this.data = spec.data;
    this.input = document.getElementById('find');

    this.makeList(this.data, 'tree');
    this.enableListeners();
};

App.prototype.createContainer = function () {
    return document.createElement('ul');
};

App.prototype.createListItem = function (container, data) {
    var li = document.createElement('li');

    li.id = data.name;
    li.innerHTML = data.name;
    this.setIcon(li, data);

    container.appendChild(li);
};


App.prototype.setIcon = function (li, data) {
    if (data.type === 'dir') {
        li.setAttribute('class', App.constants.classes.folder);
    } else {
        li.setAttribute('class', App.constants.classes.file);
    }
};

App.prototype.makeList = function (arr, place) {
    var ul = this.createContainer();
    var container = document.getElementById(place);

    container.appendChild(ul);

    if (arr && arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            this.createListItem(ul, arr[i]);
            if (arr[i].type === 'dir') {
                this.makeList(arr[i].children, arr[i].name);
            }
        }
    } else {
        var li = document.createElement('li');
        this.createListItem(ul, arr);
    }
};

App.prototype.search = function (arr, find) {
    var ul = this.createContainer(),
        test, li;

    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].name.indexOf(find) >= 0) {
                test = document.getElementById('tree');
                test.innerHTML = "";
                test.appendChild(ul);
                li = document.createElement('li');

                this.createListItem(ul, arr[i]);
                this.makeList(arr[i].children, arr[i].name);
            } else {
                if (arr[i].type === 'dir') {
                    this.search(arr[i].children, find);
                }
            }
        }
    } else {
        if (arr.name.indexOf(find) >= 0) {
            this.makeList(arr, arr.name);
        }
    }
};