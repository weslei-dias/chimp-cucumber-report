'use strict';

module.exports = function () {

    let urlPagina;

    this.Given(/^que eu acesse a página do Google$/, function () {
        urlPagina = browser.url("https://google.com/");
    });

    this.When(/^eu buscar pelo termo '(.*)'$/, function (value){
        urlPagina.setValue('input[name="q"]',value);
    });

    this.Then(/^eu posso ver todos os resultados da minha pesquisa$/, function () {
        urlPagina.keys(['Enter']);
    });

};
