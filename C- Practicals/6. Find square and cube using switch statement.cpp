//WAP to illustrate the concept of switch statement
#include<stdio.h>
int main()
{
	int n,a;
	printf("What do you like to do?\n");
	printf("Enter 1 to find square\n");
	printf("Enter 2 to find cube\n");
	scanf("%d",&n);
	switch(n)
	{
		case 1:
			printf("Enter a number to be squared: \n");
			scanf("%d",&a);
			printf("The square fo entered number is: %d",(a*a));
			break;
		
		case 2:
			printf("Enter a number to be cubed: \n");
			scanf("%d",&a);
			printf("The cube of entered number is: %d",(a*a*a));
			break;
		
		default:
			printf("Enter the valid option \n");
	}
	return 0;
}
