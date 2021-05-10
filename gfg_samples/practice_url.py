import requests

gfg_compiler_api_endpoint = "https://practiceapi.geeksforgeeks.org/api/v1/problems/palindromic-array-1587115620/compile/"
languages = ['C', 'Cpp', 'cpp', 'Java', 'Python', 'Python3', 'Scala', 'Php', 'Perl', 'Csharp']

def gfg_compile(lang, code, _input=None, save=False):
    data = {
        'request_type': 'testSolution',
        'code': code,
        'input': _input,
        'language': lang,
        'source': 'https://practice.geeksforgeeks.org'
    }
    _cokkie = {
        'gfg_nluid': '399bfd753737f5c86532631859c0bb26',
        'authtoken': '41dcedb7e630e77f3378f9b2a2c98368',
        'gfguserName': 'order_of_the_pig%2FeyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LmdlZWtzZm9yZ2Vla3Mub3JnXC8iLCJpYXQiOjE2MjA1Nzg3NzYsImV4cCI6MTYyMzE3MDc3NiwiaGFuZGxlIjoib3JkZXJfb2ZfdGhlX3BpZyIsInV1aWQiOiI3Yjc1ZGVhODQ2MjQ3MDkyNjVhYjExODIzYTVkMzllZSIsInByb2ZpbGVVcmwiOiJodHRwczpcL1wvbWVkaWEuZ2Vla3Nmb3JnZWVrcy5vcmdcL2ltZy1wcmFjdGljZVwvdXNlcl93ZWItMTU5ODQzMzIyOC5zdmciLCJpbnN0aXR1dGVJZCI6MjYxOCwiaW5zdGl0dXRlTmFtZSI6IlNhdGh5YWJhbWEgVW5pdmVyc2l0eSBDaGVubmFpIiwibmFtZSI6IlJpdHdpayBCaGF0dGFjaGFyeWEifQ.qs4tqhMZEclmkqsrpKmQgnIo1ukxzTokk_E4-JgrFwxG1SRDSmXTAcAMQtYqwyOgwFmeMT8T0Hi_R21sQDMooWDoStOoimhQCjLvHe_34YDmkjXA213t7WJsVP_zILSYswwufdqI8zaKm5qizdWvZBQTcYoecKTAQqM7-AwSG-T7xRkYm5NbKWhEH3eSKLOShI7jqrgX-KWn9ulSqLLISrxrsncXeNc03knMc2WsfTh4SBjNGnWTqFwo2LP10-mOyjrR60dnfRY7d7INsRO743VnDdnl_MwTksKxk6BLrvOEfSZjb12pWm71CajAwUYR8660uP2KFFWu8bu1GTXnUg'
    }
    r = requests.post(gfg_compiler_api_endpoint, data=data, cookies=_cokkie)
    return r.json()


if __name__ == "__main__":
    lang = 'cpp'
    _input = """
        2
        5
        111 222 333 444 555 
        3
        121 131 20
    """
    code = """
        #include<iostream>
        #include<string.h>
        using namespace std;
        int PalinArray(int a[], int n);
        int main()
        {
            int t;
            cin>>t;
            while(t--)
            {
                int n;
                cin>>n;
                int a[n];
                for(int i = 0; i < n; i++)
                    cin>>a[i];
                cout<<PalinArray(a,n)<<endl;
            }
        }


        /*Complete the function below*/
        int PalinArray(int a[], int n)
        {  //add code here.
            for (int i = 0; i < n; i++) {
                int k = a[i];
                int rev=0;
                while (k > 0) {
                    int d = k % 10;
                    k = k / 10;
                    rev = rev*10 + d;
                }
                if (rev!=a[i]) {
                    return 0;
                }
            }
            return 1;
        }
    """
    print(gfg_compile(lang, code, _input))
