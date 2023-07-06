In the first place Nginx is a open source web server which serves the web applications

Why in the world we need Nginx ?

How Nginx acts as a Load Balancer ?

What is Reverse Proxy and Forward Proxy ?

## Working with the nginx.conf file the main configuration file required for configuring the nginx server !
context    -> blocks of code
directives -> key value pairs

within a context we can hva directives realted to that particular context 

```
  events{
  }
  http{
    include mime.types                                            ---> this tells the nginx what are th efile sof what extensions [text/css -> .css , text/js -> .js] that because initally nginx only understands html
    server {
       listen 80                                                  ---> this is where our server starts listening to
       root /usr/share/nginx/html                                 ---> this is the directory that is being served
       location /fruits {
          root /usr/share/nginx/html                              ---> this is the way to serve additional sub directories inside th eroot directory the fruits path is automatically appends 
       }
       location /carbos {
          alias /usr/share/nginx/html/fruits                      ---> notice that we are using alias so that the /carbos path is not automatically attached at the end hence this also serves the same fruits directory
       }
       location /vegetables {
          root /usr/share/nginx/html
          try_files /vegetabels/veggies.html /index.html = 404    ---> the situation here is the vegetables path did not contain index.html file which is served defaultly hence we are configuring nginx to search for veggies.html if its not found search for index.html if its not found throw a 404 error
       }
    }
  }
```
## configuring nginx as a reverse proxy/load balancer

```
  // continuation to above
  upstream backendserver {
     server 127.0.0.1:1111;
     server 127.0.0.1:2222;
     server 127.0.0.1:3333;
     server 127.0.0.1:4444;
  }
  location / {
     proxy_pass http://backendserver/;
  }
```
