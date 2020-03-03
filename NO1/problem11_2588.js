/*
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

   4 7 2  ------ (1)
x  3 8 5  ------ (2)
---------------------
    2 3 6 0 ------- (3)
 3 7 7 6    ------- (4)  
1 4 1 6     ------- (5)
----------------------
1 8 1 7 2 0 ------- (6)


(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

*/


// 문제 풀이 1


// -------------------------
/*
// 자연수 각 자리수 뽑기
        // temp = 1의 자리수부터 자연수의 자리수를 가져온다.
        
        while(num > 0){
            int temp = num % 10;
            num /= 10;
        }
*/
// -------------------------

import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
       int num1 = 0;
       int num2 = 0;
        
        Scanner sc = new Scanner(System.in);
        
        num1 = sc.nextInt();
        num2 = sc.nextInt();
        sc.close();
        
        System.out.println(num1*(num2%10));
        System.out.println(num1*((num2%100)/10));
        System.out.println(num1*(num2/100));
        System.out.println(num1*num2);
    }
}



// 문제 풀이 2


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    
    public static void main(String[] args) throws IOException {
        int num1 = Integer.parseInt(br.readLine());
        int num2 = Integer.parseInt(br.readLine());
        
        solve(num1, num2);
    }
    
    private static void solve(int num1, int num2){
        int temp = num2;
        while(temp > 0){
            System.out.println(num1*(temp % 10));
            temp /= 10;
        }
        System.out.println(num1*num2);
    }
}


