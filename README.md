# code-challenge
Blank HTML store template for code challenge

https://next.json-generator.com/api/json/get/EkzBIUWNL

1) Create a NodeJS server that has getMany & getSingle API endpoints using
this JSON URL
2) Create a SPA which wires up the static HTML given in the repo (You can
use (or not) any framework you're comfortable with)
3) The SPA should have 2 pages, a list all products, and an individual
product page. Both HTML templates are provided.
4) Delivery should be a separate github repo on your own account.

We're only going to read through Javascript on both the client and the
server, so focus your energy there. You should not need to create any new
UI elements.

#######################################################################

The client for the project uses react and node for the server. I decided to use react here because I felt that for generating the data for products it would be easy to use components and minimize the code required in each of the front end files and its also easy to wire together the node server using axios for the requests. 

The process becomes very easy to set up routing for a SPA using reacts router by simply importing the components of the site. 

Some of the functionality of the app such as animations was lost because I had to convert from jquery based site to react, this issue arose in the animations/submissions and to some extent in the sliders because the site was directly interacting with the dom and not using a virtual dom through react.

Since the main purpose of this was to wire together the client and server I didn't spend much time on any styling issues.

To run:

- Navigate to root directory and do `npm i nodemon` then do `yarn`.
- Go to `client` folder and do `npm install`.
- Navigate to root directory and do `yarn dev`. The site will be exposed on http://localhost:3000.
