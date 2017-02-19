//funcao para formatar valores
Number.prototype.formatMoney = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1") + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};


(function(){
    var app = angular.module("bank", []);

    app.controller('bankController', function ($scope, $http) {

        //insercao do header e footer atraves da diretiva ng-include
        $scope.menu = [{name: 'header', url:'assets/layout/header.html'}, {name: 'footer', url:'assets/layout/footer.html'}];

        //variaveis de saldo e limite
        $scope.saldo = 1000.00;
        $scope.limite = 1000.00;
        $scope.saldoBlock = 0;
        $scope.saldoPoup = 0;
        $scope.saldoDisp = ($scope.saldo + $scope.limite + $scope.saldoBlock);
        $scope.limiteEmp = 1000.00;
        $scope.limiteCart = 1000.00;

        //variaveis para saber se o usuario preencheu o campo
        $scope.contaUser = false;
        $scope.contaDest = false;

        //variaveis de formulario
        $scope.docTed = '';
        $scope.favorecidoForm = '';
        $scope.agenciaUser = '';
        $scope.contaDestino = '';
        $scope.userDestino = '';
        $scope.cpfDestino = '';
        $scope.agenciaDestino = '';
        $scope.contaDestino = '';
        $scope.favorecido = '';

        //lista de favorecidos cadastrados
        $scope.favorecidosList = [{
            id: 1,
            nome: 'Fulano da Silva',
            agencia: '1234',
            conta: '1234567-8',
            banco: 'Blue Bank'
        },{
            id: 2,
            nome: 'Fulano da Silva Santos',
            agencia: '4321',
            conta: '8765432-1',
            banco: 'Blue Bank'
        },{
            id: 3,
            nome: 'Pessoa dos Santos',
            agencia: '4321',
            conta: '5432145-1',
            banco: 'Blue Bank'
        }];

        //lista de bancos cadastrados
        $scope.bancosList = [{
            id: 1,
            nome: 'Banco Brad',
            numero: 237,
            ispb: 6654654
        },{
            id: 2,
            nome: 'Banco Cidade',
            numero: 745,
            ispb: 2354886
        },{
            id: 3,
            nome: 'Banco Brasileiro',
            numero: 001,
            ispb: 1564897
        },{
            id: 4,
            nome: 'Banco do Real',
            numero: 536,
            ispb: 1245587
        }];


        //funcao para mascarar o campo de valor da transacao

        $scope.changeValue = function(){

            var elemento = parseFloat($scope.dinheiro).formatMoney(2, '.');

            $('#valueTo').focusout(function(){
                $scope.dinheiro = elemento;
            });

        };

        //funcoes que limpam os formularios
        $scope.limparInput = function(){
            $scope.favorecido = '';
            $scope.agenciaDestino = '';
            $scope.contaDestino = '';
        };

        $scope.clearInput = function(){
            $scope.favorecido = '';
            $scope.agenciaDestino = '';
            $scope.contaDestino = '';

            $scope.banco = '';
            $scope.agenciaUser = '';
            $scope.contaDestino = '';
            $scope.userDestino = '';
            $scope.documentoDestino = '';
            $scope.cpfDestino = '';
            $scope.cnpjDestino = '';
            $scope.dinheiro = '';
        };

    });

})();


