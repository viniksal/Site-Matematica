function somar(){

    var n1 = window.document.getElementById('a1')
    var n2 = window.document.getElementById('a2')
    var res = window.document.getElementById('res_soma')

    var num1 = Number(n1.value)
    var num2 = Number(n2.value)

    var soma = num1+num2

    res.innerHTML = `${soma}`
}

function subtrair(){

    var n1 = window.document.getElementById('s1')
    var n2 = window.document.getElementById('s2')
    var res = window.document.getElementById('res_subtracao')

    var num1 = Number(n1.value)
    var num2 = Number(n2.value)

    var soma = num1-num2

    res.innerHTML = `${soma}`
}

function dividir(){

    var n1 = window.document.getElementById('d1')
    var n2 = window.document.getElementById('d2')
    var res = window.document.getElementById('res_divisao')

    var num1 = Number(n1.value)
    var num2 = Number(n2.value)

    var soma = num1/num2

    res.innerHTML = `${soma}`
}

function multiplicar(){

    var n1 = window.document.getElementById('m1')
    var n2 = window.document.getElementById('m2')
    var res = window.document.getElementById('res_multi')

    var num1 = Number(n1.value)
    var num2 = Number(n2.value)

    var soma = num1*num2

    res.innerHTML = `${soma}`
}

function potencia(){

    var n1 = window.document.getElementById('p1')
    var n2 = window.document.getElementById('p2')
    var res = window.document.getElementById('res_potencia')

    var num1 = Number(n1.value)
    var num2 = Number(n2.value)

    var potencia = num1 ** num2

    res.innerHTML = `${potencia}`
}

function raiz(){
    var n1 = window.document.getElementById('r1')
    var res = window.document.getElementById('res_raiz')

    var num1 = Number(n1.value)

    var raiz = Math.sqrt(num1)

    res.innerHTML = `${raiz}`
}

function teste(){

    var n1 = window.document.getElementById('d1')
    var n2 = window.document.getElementById('d2')
    var res = window.document.getElementById('res_divisao')

    if (n1.value.length == 0 || n2.value.length == 0) {
        window.alert('[ERRO] Impossível dividir! Não é possível dividir por zero.')
    } else {
        var num1 = Number(n1.value)
        var num2 = Number(n2.value)

        var soma = num1/num2

        res.innerHTML = `${soma}`
    }

}