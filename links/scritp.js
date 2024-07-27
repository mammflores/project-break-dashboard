document.addEventListener('DOMContentLoaded', function() {
    const linkList = document.getElementById('linkList');
    const addLinkButton = document.getElementById('addLink');

    // Cargar links desde localStorage al cargar la página
    const storedLinks = JSON.parse(localStorage.getItem('links')) || [];
    storedLinks.forEach(link => {
        createLinkElement(link.title, link.url);
    });

    addLinkButton.addEventListener('click', function() {
        const title = document.getElementById('title').value;
        const url = document.getElementById('url').value;

        if (title && url) {
            createLinkElement(title, url);
            saveLinkToLocalStorage(title, url);

            // Limpiar los campos de entrada
            document.getElementById('title').value = '';
            document.getElementById('url').value = '';
        } else {
            alert('Por favor, ingrese tanto el título como la URL.');
        }
    });

    function createLinkElement(title, url) {
        const linkItem = document.createElement('div');
        linkItem.className = 'link-item';

        const link = document.createElement('a');
        link.href = url;
        link.textContent = title;
        link.target = '_blank';
        linkItem.appendChild(link);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
            linkList.removeChild(linkItem);
            removeLinkFromLocalStorage(title, url);
        });
        linkItem.appendChild(deleteButton);

        linkList.appendChild(linkItem);
    }

    function saveLinkToLocalStorage(title, url) {
        const links = JSON.parse(localStorage.getItem('links')) || [];
        links.push({ title, url });
        localStorage.setItem('links', JSON.stringify(links));
    }

    function removeLinkFromLocalStorage(title, url) {
        const links = JSON.parse(localStorage.getItem('links')) || [];
        const filteredLinks = links.filter(link => link.title !== title || link.url !== url);
        localStorage.setItem('links', JSON.stringify(filteredLinks));
    }
});
