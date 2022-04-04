import AlertDialog from "../components/AlertDialog";

export default function accountResearch() {
    const inputSearch = document.getElementById("account-search-field"),
        btn = document.getElementById("_account-search-button"),
        username = document.getElementById("user_name"),
        userMatricule = document.getElementById("user_matricule"),
        matricule = document.getElementById("_matricule"),
        account_type = document.getElementById("account_type"),
        loader = document.getElementById("account-search-loader"),
        account_exist_view = document.getElementById("account-exist-view"),
        btnSubmit = document.getElementsByName('_btn'),
        _alert = new AlertDialog();

    if (inputSearch && btn) {
        btn.addEventListener("click", function () {
            const _matricule = inputSearch.value.toString().trim(),
                formData = new FormData(),
                url = "/admin/office/account/find/user";


            if (_matricule !== "") {
                loader.style.display = "flex";
                formData.append("_matricule", _matricule.toUpperCase())
                resetView();
                axios.post(url, formData).then(response => {
                    if (response.data.data !== false) {
                        username.value = response.data.data.lastname + " " + response.data.data.firstname;
                        userMatricule.value = response.data.data.matricule;
                        account_type.value = response.data.data.type;
                        if (response.data.data.account === 0) {
                            matricule.value = response.data.data.matricule;
                            submitButtonState();
                        } else {
                            account_exist_view.style.display = "block";
                            submitButtonState(false);
                        }
                    } else {
                        _alert.setYesOnly = true
                        _alert.type = "d"
                        _alert.yes = "D'ACCORD";
                        _alert.setMessage = "Ce matricule n'existe pas, Veuillez vérifier le matricule et réessayer"
                        _alert.setHeader = "Information"
                        _alert.show()
                    }
                    loader.style.display = "none";

                }).catch(error => {
                    loader.style.display = "none";
                    resetView();
                    submitButtonState();
                });
            } else {
                _alert.setYesOnly = true
                _alert.type = "w"
                _alert.yes = "Oui";
                _alert.setMessage = "Veuillez remplir correctement le champ de recherche"
                _alert.setHeader = "Avertissement"
                _alert.show()
                submitButtonState();
            }

        });
    }

    function resetView() {
        username.value = "";
        userMatricule.value = "";
        account_type.value = "";
        matricule.value = "";
        account_exist_view.style.display = "none";
    }

    function submitButtonState(isActive = true) {
        for (let i = 0; i < btnSubmit.length; i++) {
            if (isActive) {
                if (btnSubmit.item(i).hasAttribute("disabled"))
                    btnSubmit.item(i).removeAttribute("disabled")
            } else {
                for (let i = 0; i < btnSubmit.length; i++) {
                    btnSubmit.item(i).setAttribute("disabled", "disabled")
                }
            }

        }
    }
}