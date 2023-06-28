var tagAPI = 'https://my-json-server.typicode.com/Akatsuki-Naruto/My-JSON-Server/Tag'

function start() {
    getTags(function (Tag) {
        renderTags(Tag)
    });
}

start();

// Functions

function getTags(callback) {
    fetch(tagAPI)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function renderTags(Tag) {
    var listTagBlock = document.querySelector('#listTags');
    var htmls = Tag.map(function(Tag) {
        return `
        <button className="tag${Tag.id} buttonTag">
            <img className="avatarTag" src="${Tag.avatar}" alt="">
            <div className="titleTag">${Tag.title}</div>
            <div className="timeTag"></div>
            <img className="imageTag" src="${Tag.picture}" alt="">
        </button>`;
        
    });
    listTagBlock.innerHTML = htmls.join('');
}

export default renderTags