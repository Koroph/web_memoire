import subMenuToggleContent, { closeSubMenuContentIfOpen, menuToggle, subMenuToggle } from "./partial/sub-menu";
import ImageLoader from "./components/ImageLoader";
import { searchInTable } from "./partial/table";
import { KhChart } from "./components/KhChart";
import welcomeModalCloseAction from "./partial/welcome-message";
import KhSelect from "./components/selectCustom/KhSelect";
import KhMediaStore from "./components/media-store/KhMediaStore";
import ChipBuilder from "./components/ChipBuilder";
import invoicePrint from "./partial/print-invoice";
import TabBar from "./components/TabBar";
import panelAction from "./partial/panel";
import switchValueToggle from "./partial/switch";
import activeFieldParent from "./partial/field";
import closeAlertAction from "./partial/alert";
import accountResearch from "./partial/account-research";
import CheckboxGroup from "./components/CheckboxGroup";
require('./bootstrap');
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('kh-app-body-nav-bar-item-btn');

    subMenuToggleContent(toggleBtn);
    menuToggle();
    searchInTable();
    //globalSearch();
    //closeAlertAction();
    accountResearch()
    welcomeModalCloseAction();
    invoicePrint();
    panelAction();
    switchValueToggle();
    activeFieldParent();
    closeAlertAction();



    (new ImageLoader()).start();

    new KhSelect('kh-select-native');
    new KhMediaStore();
    new KhMediaStore('img-media-store_');
    new ChipBuilder();
    new TabBar();
    new CheckboxGroup();
    document.documentElement.addEventListener('click', function () {
        closeSubMenuContentIfOpen(toggleBtn.nextElementSibling);
    });

    //components
    new KhChart();


});