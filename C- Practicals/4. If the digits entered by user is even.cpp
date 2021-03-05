//WAP to input a number entered from the user and displat the entered number if it is even
#include<stdio.h>
int main()
{
	int n;
	printf("Enter a number:");
	scanf("%d",&n);
	if(n%2==0)
	{
		printf("The entered number is %d",n);
	}
	return 0;
}
