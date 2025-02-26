var foo = 10; //Variável no escopo global

function func1() {
    foo = 1; //Isso mudará o valor da variável global
    bar = 2; //bar é uma nova variável global
    var baz = 3; //baz é um uma nova variável cujo escopo está dentro de func1
    
    function func2() {
        baz = 5; //A baz de func1 tem seu valor alterado porque func2 está no mesmo escopo dela, portanto, tem acesso a suas variáveis
        var bam = 6;
    }

}
func1();
console.log(foo); //Retornou 1 
console.log(bar); //Retornou 2
console.log(baz); //Baz não está definido
console.log(bam); //Bam não está definido

