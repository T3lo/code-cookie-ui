import requests

gfg_url = "https://practiceapi.geeksforgeeks.org/api/v1/problems/submission/result/"
languages = ['C', 'Cpp', 'Cpp14', 'Java', 'Python', 'Python3', 'Scala', 'Php', 'Perl', 'Csharp']


def gfg_compile(sub_id):
    data = {
        'sub_id': sub_id,
        'sub_type': 'testSolution'
    }

    _cookies = {
        'gfg_nluid': 'd028489db6a946325dc4c8b2a046d556',
        'authtoken': '2c5f40730e912fef7b98b34c9ece3d26',
        'gfguserName': 'order_of_the_pig/eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LmdlZWtzZm9yZ2Vla3Mub3JnXC8iLCJpYXQiOjE2MjA1Nzk0MTMsImV4cCI6MTYyMDY2NTgxMywiaGFuZGxlIjoib3JkZXJfb2ZfdGhlX3BpZyIsInV1aWQiOiI3Yjc1ZGVhODQ2MjQ3MDkyNjVhYjExODIzYTVkMzllZSIsInByb2ZpbGVVcmwiOiJodHRwczpcL1wvbWVkaWEuZ2Vla3Nmb3JnZWVrcy5vcmdcL2ltZy1wcmFjdGljZVwvdXNlcl93ZWItMTU5ODQzMzIyOC5zdmciLCJpbnN0aXR1dGVJZCI6MjYxOCwiaW5zdGl0dXRlTmFtZSI6IlNhdGh5YWJhbWEgVW5pdmVyc2l0eSBDaGVubmFpIiwibmFtZSI6IlJpdHdpayBCaGF0dGFjaGFyeWEifQ.Bi5C74S2Vx_xsChdr-6PYXNCMbxhSha12x9MKiEv8KOU_njnA8KnzLUUfFR3zQJIV7VyxG7qnUaqBvgN97D_s-0FFuKymbHXPv_TjEvDXVINNBGxrzSTDymGLp2pc90x7QVKDGKMyq7sh7ZuSC6STzFUUvVhYWa20gOAFyM28ZMF-cadfDlbn2ioLaLX5BO0WVbMeV9Op3GQQ7MBI4bm9bemCkH3GotWrS5lh0ts6UDps9bn1sfGBwpehs5acqNtA_FjFMUD3ILf4kuCJUEA0Mkr3p6AAXNlF4ekGN6HyfLy0xqau0epbCFnunFduG5WsTZJpCXUCslHL2wzGOJZOw'
    }

    r = requests.post(gfg_url, data=data, cookies=_cookies)
    return r.json()


if __name__ == "__main__":
    sub_id='b2c456e722355db4db4d2cc08b8c2138'
    print(gfg_compile(sub_id))

