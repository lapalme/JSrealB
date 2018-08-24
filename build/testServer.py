#!/usr/bin/env python3
## script for using node server-{dme|en}.js
from urllib.parse import urlencode
from urllib.request import Request, urlopen

def jsRealB(exp):
    return urlopen('http://127.0.0.1:8081?'+urlencode({"lang":"en","exp":exp})).read().decode()

print(jsRealB('S(NP(D("the"),N("man")),VP(V("love")))'))
print(jsRealB('S(Pro("I").pe(3).g("f").n("s"), VP(V("be"), A("beautiful")).a(","),\
                S(Pro("that"), VP(V("be"), "right ?")).typ({"int":"yon"}))'))