<?php
    declare(strict_types=1); // Permite que seja obrigatorio receber e devolver os tipos, caso informados
    // Funções elas são declaradas atraves da palavra-chave function

    function nome_da_funcao($param1, $param2)
    {
        
    }
    // Criando uma função  que só pode receber como parâmetros inteiros ou float. Bem como, o retorno é do mesmo tipo
    function soma(int|float $a, int|float $b): int|float
    {
        return $a + $b;
    }

    echo soma(5.6, 8);
    echo "\n";

    // Função recebe apenas strings e retorna esse msm tipo
    function concat(string $a, string $b): string
    {
        return $a . $b;
    }

    echo concat("Hello", " World!\n");


    // Classe
    # Nome de Classes devem iniciar com letra maiuscula
    # Caso seja um nome composto deve ser utilizado o padrao Camel Case

    class ContaBancaria {
        // Declaração dos atributos da classe
        private int $agencia;
        private int $numero;
        private string $titular;
        private string $senha;
        private float $saldo;

        function __construct(int $ag, int $numero, string $titular, string $senha, float $saldo=100){
            // Aqui serão feitas todas as ações necessarias ao instanciar um objeto dessa classe
            $this->agencia = $ag;
            $this->numero = $numero;
            $this->titular = $titular;
            $this->senha = $senha;
            $this->saldo = $saldo; 
            echo "$titular agora possui uma conta na agência $ag de número $numero";
        }

        
        // Acessando o atributo privado saldo atraves de um metodo
        public function saldo():string
        {
            return "Saldo atual: R$" . str_replace(".", ",", strval($this->saldo)) . "\n";
        }

        // criando um metodo magico __get() para acessar as propriedades
        public function __get(string $name)
        {
            return $this->{$name};   
        }


        // Uma boa pratica é que os nomes de metodos sejam verbos 
        public function saca(string $senha, float $valor): string
        {
            if($valor <= 0){
                return "Valor inválido!";
            }

            if($this->senha == $senha){
                if($this->saldo >= $valor){
                    $this->saldo -= $valor;
                    return "Saque efetuado com sucesso!";
                }

                return "Saldo insuficiente!";
                
            }
            return "Senha incorreta!";
        }
    }

    $conta = new ContaBancaria(1234, 27090, "Matheus", "rexona123", 120.50);


    echo "\n";
    echo "ACESSANDO A PROPRIEDADE TITULAR ATRAVES DO METODO MAGICO __get()";
    echo "\n";
    echo "\n" . $conta->saldo;
    echo "\n";
    echo "\n";
    echo "ACESSANDO A PROPRIEDADE TITULAR ATRAVES DO METODO saldo()";
    echo "\n" . $conta->saldo();
    echo "\n";
    echo $conta->saca('rexona123', 120);
    echo "\n";
    echo "\n" . $conta->saldo();
    

    /* 
    # EXEMPLO DE ACESSO DIRETO À PROPRIEDADE SALDO (MÁ PRÁTICA!!!)
    $valor_saque = 130;
    $senha = "rexona123";
    if($senha == $conta->senha){
        if($conta->saldo >= $valor_saque && $valor_saque > 0){
            $conta->saldo -= $valor_saque;
            echo "Saque feito com sucesso";
        }else{
        echo "Saldo Invalido ou Insuficiente";
        }
    }else{
        echo "Senha incorreta";
    } */
    


