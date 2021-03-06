InterMine Web Services demos and examples through the use of `imjs` or `widgets`.

## Content:

1. `object-in-bag-imjs` show for a list of InterMine objects if they are in a user's bag or not
1. `publications-displayers-imjs` a proof of concept displayers by defining behaviors in JavaScript
1. `ratmine-widgets` enrichment widgets embedded and styled on a RatMine page
1. `wormbase-tag-cloud-imjs` cloud of terms styled as a WormBase widget
1. `grid-displayer` a JavaScript example of managing a dynamic grid of (fake) data
1. `mgi-tag-cloud-imjs` cloud of terms with a toggler styled inside an MGI page

## To Run:

Initialize the library dependencies:

```shell
$ git submodule init
$ git submodule update
```

Visit each of the example folders and follow instructions there.

## Cross-Site Scripting Error:

If you see an error running the demos as a `file://` then start the web server `./webserver.sh` and visit [http://0.0.0.0:1112](http://0.0.0.0:1112).