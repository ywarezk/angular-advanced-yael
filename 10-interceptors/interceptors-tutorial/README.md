# Interceptor

- add some logic before sending the request to the server
- some logic after getting the response

```
HttpClient.prototype.get('....')
```

sends an ajax request

browser                       Server
            Request
            
    JWT     Content-Type        Log 
-----o------o--------------------o------o------> 

            Response
                     Some NGRX Actions          Cache     error 401
<----------------------R---------------------------R---------R------- 
