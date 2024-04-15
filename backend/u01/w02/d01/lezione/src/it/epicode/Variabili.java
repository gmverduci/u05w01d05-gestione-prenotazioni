package it.epicode;

public class Variabili {
    public static void main(String[] args) {
        int x; //dichiarazione di variabile

        x = 4;
        x = 6; //assegnazione di valori alla variabile


        boolean b = true; //dichiarazione e assegnazione di valore

        char c = 'q';

        double d = 3.3;

        String s = "Ciao ciao mare";

        String fraseConcatenata = s + d; //d viene convertita in stringa (Ciao ciao mare3.3)

        System.out.println(fraseConcatenata);

        final int y = 5; //dichiarazione di COSTANTE: non è possibile riassegnare un valore differente a questa variabile

        byte b2 = 100;

        x = b2; //sto assegnando a x il valore di b2. x è di tipo int (32 bit) e riceve un valore di tipo byte (8 bit). Java in questo caso userà degli 0 per riempire i bit mancanti

        //b2 = x; conversione non ammessa, dato che potrebbe causare una perdita di informazioni riducendo un numero a 32 bit a un numero a 8 bit. In questo caso dobbiamo ricorrere a conversione di tipo esplicita:

        b2 = (byte) x; //cast esplicito

        System.out.println(b2);




    }
}