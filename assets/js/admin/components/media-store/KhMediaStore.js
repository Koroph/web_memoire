/**
 * @author Koroph <yjk@outlook.fr>
 *
 * @website http://koroph.site
 * @link  https://github.com/Koroph
 * @license MIT
 * @copyright Copyright (c) 2020.
 */
import {
    SVG_ADD,
    SVG_DELETE,
    SVG_FOLDER,
    SVG_FOLDER_ADD,
    SVG_FOLDER_DELETE,
    SVG_SAVE,
    SVG_WARNING
} from "./svg";
import AlertDialog from "../AlertDialog";
import config from "./config.json";

export default class KhMediaStore {
    constructor(className = 'img-media-store') {
        this.INPUT_FILE_NAME = '_image';
        this.DIRECTORY_ID = 'directory_id';
        this.DIRECTORY_NAME = 'directory_name';
        this.CLASS_NAME = className;


        if (document.getElementsByClassName(this.CLASS_NAME) != null) {
            this.khMediaStoreBody();
        }
    }


    khLoadData({data}) {
        //this.subBody.innerHTML = "";
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                this.subBody.append(this.mediaStoreList({item: data[i]}));
            }
        } else this.viewEmpty.style.display = "flex";

        this.subBody.append(this.viewEmpty);
        this.body.append(this.subBody);
    }

    _emptyView() {
        const container = document.createElement('div'),
            content = document.createElement('div'),
            subWord = document.createElement('small'),
            word = document.createElement('h4');

        container.id = "kh-media-store-body-empty";
        content.id = "kh-media-store-body-empty-content";

        word.innerHTML = "Aucun dossier trouvé"
        subWord.innerHTML = "Cliquer sur le boutton " + SVG_FOLDER_ADD + " pour ajouter un nouveau dossier.."
        content.innerHTML = SVG_WARNING;
        content.append(word, subWord);
        container.append(content);
        container.style.display = "none";
        return container;
    }

    /**
     *
     * @param base {HTMLElement}
     * @param root {HTMLDivElement}
     */
    openMediaStore(base, root) {
        const khView = document.getElementsByClassName(this.CLASS_NAME),
            _this = this;
        this.viewEmpty = this._emptyView();
        if (khView != null)
            //this.prefix = khView.dataset.prefix;
            for (let i = 0; i < khView.length; i++) {
                khView.item(i).addEventListener('click', function () {
                    base.style.display = "flex";
                    // _this.loaderContainer.style.display = "flex";
                    base.setAttribute('data-target', this.id);
                    if (this.dataset.required !== "") _this.file.setAttribute('required', 'required')
                    base.append(root);
                    axios.get(config.files + '/' + _this.prefix)
                        .then(function (response) {
                            //console.log(response.data.data)
                            _this.loaderContainer.style.display = "none";
                            _this.khLoadData({
                                data: response.data.data
                            });
                        });
                });
            }
    }

    /**
     *
     * @param {string} name
     * @param {number} width
     * @param {number} height
     * @param {boolean} is
     * @return {(HTMLDivElement|HTMLButtonElement)[]}
     */
    folderSVG({name, width, height, is = false}) {
        const
            svg = document.createElement('div'),
            div = document.createElement('div'),
            folderName = document.createElement('span'),
            button = document.createElement('button');
        button.className = "folder-delete";
        svg.className = "kh-media-list-item-header_";
        folderName.className = "kh-media-list-item-header-text";
        //folderName.innerHTML = name;
        //folderName.innerHTML = name+' <small>[800x900]</small>';
        folderName.innerHTML = `${name} <strong>[${width},${height}]</strong>`;
        div.append(folderName);
        div.insertAdjacentHTML("afterbegin", SVG_FOLDER)
        button.className = "folder-del";
        button.innerHTML = SVG_FOLDER_DELETE;

        // hide folder btn remove when folder content files
        if (!is) button.style.display = "none";
        svg.append(div, button);

        return [svg, button];
    }

    /**
     *
     * @param file {File}
     * @param id {string}
     * @return {FormData}
     */
    dataSend({file, id}) {
        const formData = new FormData();
        formData.append(this.DIRECTORY_ID, id);
        formData.append(this.INPUT_FILE_NAME, file, file.name);
        formData.append(this.DIRECTORY_NAME, file.name);
        return formData;
    }

    /**
     *
     * @param value {boolean}
     */
    listItemAddIsEnable(value = true) {
        const list_item_add = document.getElementsByClassName('kh-media-list-item-add');
        if (list_item_add != null)
            for (let i = 0; i < list_item_add.length; i++) {
                if (value)
                    list_item_add.item(i).setAttribute('disabled', "");
                else {
                    list_item_add.item(i).removeAttribute('disabled');
                    list_item_add.item(i).style.display = "flex";
                }
            }
    }

    /**
     *
     * @param item {Object}
     * @param isMask {boolean}
     * @return {HTMLDivElement}
     */
    mediaStoreList({item, isMask = false}) {
        const content = document.createElement('div'),
            _this = this,
            mediaList = document.createElement('div'),
            mediaListHeader = document.createElement('div'),
            base = this.base, khAlert = new AlertDialog();
        content.className = "kh-media-list-item-content";
        mediaList.className = "kh-media-list-item";
        mediaListHeader.className = "kh-media-list-item-header";

        if (isMask) {
            const mask = document.createElement('div'),
                maskLoader = document.createElement('div');
            mask.className = "kh-media-list-item-mask";
            maskLoader.id = "kh-media-store-small-loader";
            mask.append(maskLoader);
            mediaList.append(mask);
        }

        for (let i = 0; i < item.catalog.length; i++) {

            content.append(this.mediaStoreListItem({
                id: item.catalog[i].id,
                url: item.catalog[i].url,
                is: item.catalog[i].is,
                name: item.catalog[i].title,
                created: item.catalog[i].created_at,
                selected: this.imageLisItemIsSelected(base, item.catalog[i].id)
            }));
        }
        const [folderHeader, btnFolderRemove] = this.folderSVG({
            name: item.name,
            width: item.width,
            height: item.height,
            is: item.catalog.length === 0
        });
        mediaListHeader.append(folderHeader);
        content.append(this.mediaStoreListAdd(item.id, content, btnFolderRemove));

        btnFolderRemove.onclick = (event) => {
            const parent = mediaList.parentElement;
            khAlert.setMessage = "Vous voulez vraiment supprimer le dossier \"" + item.name + "\" ?";
            khAlert.type = "d";
            khAlert.header = "Avertissement";
            khAlert.yes = "Oui";
            khAlert.no = "Non";
            khAlert.show().then(rep => {
                if (rep) {
                    mediaList.style.display = "none";
                    mediaList.style.transition = "display 400ms ease";
                    if (parent.children.length === 4) {
                        _this.viewEmpty.style.display = "flex";
                    }
                    axios.delete(config.remove_folder.replace(":id", item.id))
                        .then(function (response) {
                            if (response.data.is) {
                                mediaList.remove();
                            }
                        }).catch((e) => {
                        mediaList.style.display = "block";
                        if (parent.children.length === 3) {
                            _this.viewEmpty.style.display = "none";
                        }
                    });
                }
            })

        }
        mediaList.append(mediaListHeader, content);
        return mediaList;
    }

    /**
     * @param base {HTMLDivElement}
     * @param id {string}
     * @return {boolean}
     */
    imageLisItemIsSelected(base, id) {
        const _id = parseInt(document.getElementById(base.dataset.target).children.item(1).value);
        if (isNaN(_id)) return false;
        else return _id === id;
    }

    /**
     * @return {HTMLDivElement}
     */
    addSVG() {
        const svg = document.createElement('div');
        svg.innerHTML = SVG_ADD;
        return svg;
    }

    /**
     *
     * @param name
     * @param created
     * @param is {boolean}
     * @param url {string}
     * @param id {string}
     * @param selected {boolean}
     * @return {HTMLDivElement}
     */
    mediaStoreListItem({name, created, is, url, id, selected = false}) {
        const div = document.createElement('div'), _this = this,
            img = document.createElement('img'),
            button = document.createElement('button'),
            khAlert = new AlertDialog(),
            _placeholder = this._imagePlaceholder(),
            _date = this.dateFormat(new Date(created.date)),
            _name = name.substring(0, name.lastIndexOf('.')),
            _type = name.substring(name.lastIndexOf('.') + 1);

        div.className = "kh-media-list-item-img";

        img.title = `Nom du fichier: ${_name}\nType: image ${_type}\nCrée le: ${_date}`;

        if (selected) div.classList.add('kh-media-active');
        button.innerHTML = SVG_DELETE;
        img.setAttribute('src', url);
        if (is) div.append(img, button, _placeholder);
        else div.append(img, _placeholder);
        /**
         * remove img if error load
         */
        img.onerror = () => div.remove();
        img.onload = () => _placeholder.remove();

        /**
         * delete file
         * @param ev
         */
        button.onclick = function (ev) {
            ev.stopPropagation();
            khAlert.setMessage = "Vous voulez vraiment supprimer cette image ?";
            khAlert.type = "d";
            khAlert.header = "Avertissement";
            khAlert.yes = "Oui";
            khAlert.no = "Non";
            khAlert.show().then(rep => {
                if (rep) {
                    div.style.display = "none";
                    div.style.transition = "all 800ms ease";
                    if (div.classList.contains("kh-media-active")) {
                        _this.buttonSave.style.display = "none"
                    }
                    axios.delete(config.remove_file.replace(":id", id))
                        .then(function (response) {
                            console.log(response)
                            if (response.data.is) {
                                if (div.parentElement.children.length <= 2) {
                                    div.parentElement.previousElementSibling.firstElementChild.lastElementChild.style.display = "block";
                                }
                                div.remove();
                            } else {
                                div.style.display = "block";
                            }
                        }).catch(() => {
                        div.style.display = "block";
                        if (div.classList.contains("kh-media-active")) {
                            _this.buttonSave.style.display = "block"
                        }
                    });
                }
            });


        }
        div.onclick = function () {
            const activated = document.getElementsByClassName('kh-media-active');
            if (activated.length) activated.item(0).classList.remove('kh-media-active');

            this.classList.add('kh-media-active');
            _this.buttonSave.setAttribute('data-url', url);
            _this.buttonSave.setAttribute('data-id', id);
            if (_this.buttonSave.style.display === "" || _this.buttonSave.style.display === "none") _this.buttonSave.style.display = "block";
        };
        return div;
    }

    _imagePlaceholder() {
        const
            placeholder = document.createElement('div');

        placeholder.className = "image-placeholder";

        placeholder.innerHTML = "slsskkl"
        return placeholder;
    }

    /**
     * create add element
     * @param id
     * @param btnFolderRemove {HTMLButtonElement}
     * @param content {HTMLDivElement}
     * @returns {HTMLButtonElement}
     */
    mediaStoreListAdd(id, content, btnFolderRemove) {
        const div = document.createElement('button'), _this = this;
        div.className = "kh-media-list-item-add";
        div.id = ":" + id;
        div.append(this.addSVG());
        div.onclick = function (event) {
            _this.file.setAttribute('accept', '.png,.jpeg,.jpg,.gif')
            _this.file.click();
            let j = true;

            _this.file.onchange = function (event) {
                if (j) {
                    $(_this.mediaStoreTampon({file: _this.file.files[0], id: id})).insertBefore(div);
                    div.style.display = "none";
                    j = false;
                    _this.listItemAddIsEnable();
                    if (content.children.length - 1 > 0) {
                        btnFolderRemove.style.display = "none";
                    }
                }
            };

        };
        return div;
    }

    /**
     * create tampon element
     * @param file
     * @param id
     * @returns {HTMLDivElement}
     */
    mediaStoreTampon({file, id}) {
        const div = document.createElement('div'),
            img = document.createElement('img'),
            clearBtn = document.createElement('button'),
            progressBar = document.createElement('span'),
            reader = new FileReader(), _this = this,
            khBase = this.base;
        clearBtn.innerHTML = SVG_DELETE;
        div.className = "kh-media-list-item-tampon";
        div.append(img, clearBtn, progressBar);
        this.addFileRequest(this, div, progressBar, khBase, file, id);
        clearBtn.onclick = function () {
            if (div.parentElement.children.length <= 2) {
                div.parentElement.previousElementSibling.firstElementChild.lastElementChild.style.display = "block";
            }
            document.getElementById(":" + id).style.display = 'flex';
            _this.listItemAddIsEnable(false);
            _this.source.cancel();
            div.remove();
        };
        reader.onload = function (event) {
            img.src = event.target.result
        }
        reader.readAsDataURL(file);
        return div;
    }

    /**
     * save new file
     * @param _this
     * @param div
     * @param progressBar
     * @param khBase
     * @param file
     * @param id
     */
    addFileRequest(_this, div, progressBar, khBase, file, id) {
        setTimeout(function () {
            _this.source = axios.CancelToken.source();
            axios.post(config.add_file, _this.dataSend({
                file: file,
                id: id
            }), {
                onUploadProgress: function (progressEvent) {
                    const percent = (progressEvent.loaded / progressEvent.total) * 100;
                    progressBar.style.width = "" + percent + "%";
                },
                cancelToken: _this.source.token
            }).then(function (response) {
                const dataResp = response.data;
                if (dataResp.is) {
                    setTimeout(() => {
                        div.replaceWith(_this.mediaStoreListItem({
                            url: dataResp.url,
                            id: dataResp.id,
                            is: dataResp.is,
                            name: dataResp.title,
                            created: dataResp.created_at,
                            selected: false
                        }));
                        _this.listItemAddIsEnable(false);
                    }, 800);

                } else div.remove();

            }).catch(() => {
                div.remove();
            });
        }, 900);
    }

    /**
     *
     * @param headerContainer
     * @param btnAddFolder
     * @param base
     */
    folderAddItem(headerContainer, btnAddFolder, base) {

        const _this = this,
            div = document.createElement('div'),
            size_container = document.createElement('div'),
            input = document.createElement('input'),
            width = document.createElement('input'),
            height = document.createElement('input'),
            button = document.createElement('button');
        div.id = "media-store-popup-input";
        input.type = "text";
        input.id = "media-store-popup-input-text";
        size_container.id = "size_container";
        width.className = "media-store-popup-input-size";
        height.className = "media-store-popup-input-size";
        input.placeholder = "Dossier";
        width.placeholder = "Largeur (" + config.default_size.width + ")";
        height.placeholder = "Longueur (" + config.default_size.height + ")";
        button.id = "media-store-popup-input-button";
        button.innerHTML = SVG_SAVE;

        size_container.append(width, height);

        div.append(input, size_container, button);
        div.onclick = ev => ev.stopPropagation();
        width.onkeydown = function (e) {
            width.value = width.value.replace(new RegExp(/[A-Za-z]/), '');
        }
        height.onkeydown = function (e) {

            width.value = width.value.replace(new RegExp(/[A-Za-z]/), '');
        }
        input.onkeydown = function (e) {
            if (e.keyCode === 13) {
                _this.userAddFolderRequest(input, width, height, _this, div, base);
            }
        }
        button.onclick = function (event) {
            /*if (input.value != null && input.value.trim() !== "") {
                _this.addFolderRequest({
                    name: input.value,
                    url: base.dataset.path_add_folder
                });
                input.value = "";
            }
            div.remove();*/

            _this.userAddFolderRequest(input, width, height, _this, div, base);
        }
        btnAddFolder.onclick = (event) => {
            event.stopPropagation();
            headerContainer.append(div);
            input.focus();
        };
        document.body.onclick = () => div.remove();
    }

    /**
     *
     * @param {HTMLInputElement} input
     * @param {HTMLInputElement} width
     * @param {HTMLInputElement} height
     * @param {this} _this
     * @param {HTMLElement} div
     * @param {HTMLElement} base
     */
    userAddFolderRequest(input, width, height, _this, div, base) {
        const
            _width = width.value.trim() !== "" ? width.value.toString().trim() : config.default_size.width,
            _height = height.value.trim() !== "" ? height.value.toString().trim() : config.default_size.height;


        if (input.value != null && input.value.trim() !== "") {
            _this.addFolderRequest({
                name: input.value,
                /*url: base.dataset.path_add_folder,*/
                url: config.add_folder,
                width: _width,
                height: _height,
                prefix: this.prefix
            });
            input.value = "";
        }
        div.remove();
    }

    /**
     * Request save new folder
     * @param {string} name
     * @param {number} width
     * @param {number} height
     * @param {string} url
     * @param {string} prefix
     */
    addFolderRequest({name, width = 300, height = 300, url, prefix}) {
        const folder = new FormData(),
            _this = this,
            listDisabled = _this.mediaStoreList({
                item: {
                    "name": name,
                    "width": width,
                    "height": height,
                    "id": "",
                    "prefix": prefix,
                    "catalog": [],
                    "created_at": (new Date()).toString()
                },
                isMask: true
            });
        //emptyOld
        folder.append("name", name);
        folder.append("prefix", prefix);
        folder.append("width", width.toString());
        folder.append("height", height.toString());
        if (this.viewEmpty) this.viewEmpty.style.display = "none";
        _this.subBody.insertBefore(listDisabled, _this.subBody.firstChild);
        this.buttonAddFolder.setAttribute("disabled", "disabled");
        axios.post(url, folder).then(function (response) {
            listDisabled.replaceWith(_this.mediaStoreList({
                item: response.data
            }));
            _this.buttonAddFolder.removeAttribute("disabled");
        }).catch((e) => {
            console.log(e)
            _this.buttonAddFolder.removeAttribute("disabled");
            listDisabled.remove();
        });

    }

    khMediaStoreBody() {
        const
            root = document.createElement('div'),
            _this = this,
            loader = document.createElement('div'),
            header = document.createElement('header'),
            mediaButtonClose = document.createElement('button');

        this.viewTarget = document.querySelector('.img-media-store');
        this.buttonAddFolder = document.createElement('button');
        this.loaderContainer = document.createElement('div');
        this.body = document.createElement('div');
        this.subBody = document.createElement('div');
        this.buttonSave = document.createElement('button');
        this.file = document.createElement('input');
        this.base = document.getElementById('kh-media-store-base');
        this.prefix = this.viewTarget ? this.viewTarget.dataset.prefix : 'all';

        if (this.viewTarget){
            if (this.viewTarget.dataset.width !== '0' || this.viewTarget.dataset.height !== '0') {
                if (this.viewTarget.dataset.width !== '0')
                    config.default_size.width = parseInt(this.viewTarget.dataset.width);
                if (this.viewTarget.dataset.height !== '0')
                    config.default_size.height = parseInt(this.viewTarget.dataset.height);
            }
        }
        this.file.id = "kh-media-store-file";
        this.file.type = "file";
        this.file.style.display = "none";
        this.body.id = "kh-media-store-body";
        this.subBody.id = "kh-media-store-sub-body";
        this.loaderContainer.id = "loader-container";
        loader.id = "kh-media-store-loader";
        this.loaderContainer.append(loader);
        this.subBody.append(this.file, this.loaderContainer);
        this.body.append(this.subBody);
        header.id = "kh-media-store-:header";
        this.buttonSave.id = "kh-media-store-save";
        this.buttonSave.textContent = (this.viewTarget && this.viewTarget.dataset.reload === "true") ? "Fermer" : "Choisir";
        mediaButtonClose.id = "kh-media-store-close";
        mediaButtonClose.innerHTML = "<span>&times;</span>";
        root.id = "kh-media-store";
        this.buttonAddFolder.id = "img-container";
        this.buttonAddFolder.innerHTML = SVG_FOLDER_ADD;
        header.append(this.buttonAddFolder, mediaButtonClose);

        this.folderAddItem(header, this.buttonAddFolder, this.base);
        ///*
        mediaButtonClose.onclick = function () {
            this.base.style.display = "none";
            this.subBody.innerHTML = "";
            this.loaderContainer.style.display = "flex";
            this.subBody.append(this.file, this.loaderContainer);
            root.remove();
            if (this.viewTarget.dataset.reload === "true") location.reload();
        }.bind(this);

        this.buttonSave.onclick = function () {
            const img = document.getElementsByClassName(_this.viewTarget.dataset.img_class),
                input = document.getElementById(_this.viewTarget.dataset.input_id);

            this.base.style.display = "none";
            this.subBody.innerHTML = "";

            if (!(this.viewTarget.dataset.reload === "true")) {
                this.viewTarget.getElementsByClassName('media-store-icon')
                    .item(0).style.display = "none";
                input.value = this.buttonSave.dataset.id;
                for (let i = 0; i < img.length; i++) {
                    img.item(i).setAttribute('src', this.buttonSave.dataset.url);
                    img.item(i).onload = function () {
                        this.style.display = "block";
                    }
                    if (img[i].hasAttribute('data-mask')) {
                        const mask = document.getElementById(img[i].dataset.mask);
                        if (mask) {
                            mask.remove();
                        }
                    }
                }
            } else {
                location.reload();
            }

        }.bind(this);
        root.append(header, this.body, this.buttonSave);
        this.openMediaStore(this.base, root);
    }

    /**
     * convert date to string
     * @param {Date} date
     */
    dateFormat(date) {
        return `${date.getUTCDate()}.${date.getUTCMonth()}.${date.getUTCFullYear()} à ${date.getUTCHours()}:${date.getUTCMinutes()}`;
    }

}
