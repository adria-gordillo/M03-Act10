import java.util.*

fun factorial_iterativo(numero:Int):Double {
    var factorial:Double = 1.0
    for (i in 1..numero) {
        factorial *= i
    }
    return factorial
}

fun factorial1(numero:Int):Double {
    val resultat:Double
    if (numero <= 1) resultat = 1.0
    else resultat = numero * factorial1(numero-1)
    return resultat
}

fun main() {
    val Scanner = Scanner(System.`in`)
    print("Introdueix el número del que cal buscar el factorial: ")
    val numero: Int = scan.nextInt()
    val resultado: Double = factorial1(numero)
    println("El factorial de $numero és $resultado")
}

fun main_2() {
    for (i in 1..200)
    {
        val resultado :Double = factorial(i)
        println("El factorial de $i és $resultado")
    }
}
