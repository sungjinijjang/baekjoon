/*
두 정수 A와 B를 입력받은 다음, A/B를 출력
*/

// 문제 풀이

import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        Double a = sc.nextDouble();
        Double b = sc.nextDouble();
        sc.close();
        
        System.out.println(a/b);
    }
}