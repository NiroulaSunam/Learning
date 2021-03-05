//WAP to display following patter using nested loop
#include<stdio.h>
#define LEVELS 7
int main()
{
	int n,i,j,coeff;
	for(i=0;i<LEVELS;i++)
	{
		for(j=LEVELS;j>=i;j--)
		{
			printf("   ");
		}
		for(j=0;j<=i;j++)
		{
			if(i==0|| j==0)
			{
				coeff = 1;
			}
			else
			{
				coeff = coeff * (i-j+1)/j;
			}
			printf("%3d",coeff);
			printf("   ");
		}
		printf("\n");
	}
	return 0;
}
