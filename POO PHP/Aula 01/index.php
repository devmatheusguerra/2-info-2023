<?php
    # PHP É UMA LINGUAGEM DE SCRIPT
    # RODA NO SERVIDOR
    # LOGO ELE É SERVER-SIDE (lado servidor)
    # LOGICA DE NEGOCIO

    
    # Declaração de Variável - DINAMICAMENTE TIPADA
    $matheus = "Rexona123"; # Notem que o não definimos um tipo

    echo $matheus;
    echo "\n";
    print_r($matheus);
    echo "\n";
    var_dump($matheus);
    echo "\n\n==============================\n\nSOBRESCREVEMOS A VARIAVEL\n\n==============================\n\n";
    $matheus = 123; # Aqui sobrescrevemos a variavel

    echo $matheus;
    echo "\n";
    print_r($matheus);
    echo "\n";
    var_dump($matheus);
    

    // Falando um pouco sobre as saidas de dados
    $meu_array = [5, "Matheus", [1,2,4], true];

    echo $meu_array; # Gerará um Warning, porque nao consegue converter essa estrutura para string. OBS.: O "echo" converte tudo para string! 
    # Notem que o echo não eh uma boa maneira de exibir coleções

    # Para coleções geralmente utilizaremos funções como print_r e o var_dump, sendo o primeiro menos descritivo do que o segundo
    echo "\nPRINT_R \n";
    print_r($meu_array);
    echo "\nVAR_DUMP \n";
    var_dump($meu_array);


    // Array associativo
    $pessoa = [
        "nome" => "João",
        "idade" => 42,
        "cores_favoritas" => array(
            "preto",
            "amarelo",
            "vermelho"
        )
    ];


    echo $pessoa["cores_favoritas"][2]; # Percorrendo um array associativo



    # Estruturas de Decisão e Repetição
    if (5 >= 10) {
        # CASO SEJA TRUE ENTRA NESSE BLOCO
    } else if (5 == 10) { # Criando outras condicoes. OBS.: Equivale ao elif do python
        # Analise de uma segunda condicao caso a primeira nao seja verdadeira
    } else {
        # Executa esse em ultimo caso, como uma saida generica
    }

    # Repetição
    for ($i = 0; $i < 10; $i++){
        echo "\n\nTABUADA DE $i\n";
        for ($j = 0; $j < 10; $j++) {
            $multiplicacao = $i * $j;
            echo "\n$i X $j = $multiplicacao\n";
        }
    }


    $numeros = [];
    while (sizeof($numeros) < 15){
        $n = random_int(1, 25);
        if(!array_search($n, $numeros)){
            array_push($numeros, $n);
        }
    }

    var_dump($numeros);
    

    # Funções
    function soma($n1, $n2){
        return $n1 + $n2;
    }
    
    $x = 10;
    $y = 21;

    echo "RESULTADO DA FUNCAO soma($x, $y) é " . soma($x, $y);

    
    function fatorial($n){
        if($n == 0 || $n == 1){
            return 1;
        }

        return $n * fatorial($n - 1);
    }


    echo "\n\nFatorial de 9: " . fatorial(9);