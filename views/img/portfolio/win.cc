#include<iostream>
using namespace std;
int main(){
	int testcase;
	cin>>testcase;
	while(testcase--){
		int n;
		cin>>n;
		int a1[n];
		int a2[n];
		int win=0;
		int lose=0;

		for(int i=0;i<n;i++){
			cin>>a1[i];
		}
		for(int i=0;i<n;i++){
			cin>>a2[i];
		}
		for(int i=0;i<n;i++)
		{
			for(int j=i;j<(i+1);j++)
			{
				if(a1[i]==a2[j])
				{
					win++;
					lose++;
				}
				if(a1[i]<a2[j])
				{
					win++;
				}
				else
				{
					lose++;
				}
			}
		}
		if(win>lose){
			cout<<"WIN";
		}
		else{
			cout<<"LOSE";
		}
			

	
}

}