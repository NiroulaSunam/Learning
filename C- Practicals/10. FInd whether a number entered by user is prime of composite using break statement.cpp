//WAP to find whether the number entered by the user is prime or composite by using the concept of break statement
#include<stdio.h>
int main()
{
	int n,i;
	printf("Enter a number");
	scanf("%d",&n);
	for(i=2;i<n;i++)
	{
		if(n%i==0)
		{
			break;
		}
	}
	if(n==1)
	printf("Prime number!");
	else
	printf("Composite number!");
	return 0;
}
