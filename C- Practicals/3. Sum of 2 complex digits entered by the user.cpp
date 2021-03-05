//WAP to add two complex numbers entered by the user and display the sum
#include<stdio.h>
int main()
{
	float real1, real2, imag1, imag2;
	float real3, imag3;
	printf("Enter fist complex number: \n");
	scanf("%f+i%f",&real1,&imag1);
	printf("Enter second complex number: \n");
	scanf("%f+i%f",&real2,&imag2);
	real3 = real1 + real2;
	imag3  = imag1 + imag2;
	printf("The sum is %f+i%f",real3,imag3);
	return 0;
}
